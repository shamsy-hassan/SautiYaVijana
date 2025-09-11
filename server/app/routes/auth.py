# app/routes/auth.py
from flask import Blueprint, request, jsonify
from werkzeug.security import generate_password_hash, check_password_hash
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from flask_cors import CORS
import datetime
import traceback

# ------------------------
# Blueprint
# ------------------------
auth_bp = Blueprint("auth", __name__, url_prefix="/auth")
CORS(auth_bp)

# ------------------------
# Helper: Convert User object to dict
# ------------------------
def user_to_dict(user):
    return {
        "id": user.id,
        "firstName": user.first_name,
        "lastName": user.last_name,
        "phone": user.phone,
        "email": user.email,
        "ageGroup": user.age_group,
        "location": user.location,
        "anonymousName": user.anonymous_name,
        "bio": user.bio,
        "website": user.website,
        "profileImage": user.profile_image,
    }

# ------------------------
# REGISTER
# ------------------------
@auth_bp.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"msg": "Missing JSON data"}), 400

        email = (data.get("email") or "").strip().lower()
        password = (data.get("password") or "").strip()
        first_name = data.get("firstName")
        last_name = data.get("lastName")

        if not email or not password:
            return jsonify({"msg": "Email and password required"}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"msg": "Email already registered"}), 400

        hashed_password = generate_password_hash(password)

        new_user = User(
            first_name=first_name,
            last_name=last_name,
            email=email,
            password=hashed_password,
            phone=data.get("phone"),
            age_group=data.get("ageGroup"),
            location=data.get("location"),
            anonymous_name=data.get("anonymousName"),
            bio=data.get("bio"),
            website=data.get("website"),
            profile_image=data.get("profileImage"),
        )

        db.session.add(new_user)
        db.session.commit()

        # Identity must be string
        access_token = create_access_token(
            identity=str(new_user.id),
            expires_delta=datetime.timedelta(days=1)
        )

        return jsonify({
            "msg": "Registration successful",
            "access_token": access_token,
            "user": user_to_dict(new_user)
        }), 201

    except Exception as e:
        db.session.rollback()
        print("ERROR in /register:", e)
        traceback.print_exc()
        return jsonify({"msg": f"Registration failed: {str(e)}"}), 500

# ------------------------
# LOGIN
# ------------------------
@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"msg": "Missing JSON data"}), 400

        email = (data.get("email") or "").strip().lower()
        password = (data.get("password") or "").strip()

        if not email or not password:
            return jsonify({"msg": "Email and password required"}), 400

        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify({"msg": "Invalid email or password"}), 401

        access_token = create_access_token(
            identity=str(user.id),
            expires_delta=datetime.timedelta(days=1)
        )

        return jsonify({
            "msg": "Login successful",
            "access_token": access_token,
            "user": user_to_dict(user)
        }), 200

    except Exception as e:
        print("ERROR in /login:", e)
        traceback.print_exc()
        return jsonify({"msg": f"Login failed: {str(e)}"}), 500

# ------------------------
# GET PROFILE (Protected)
# ------------------------
@auth_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    try:
        identity = get_jwt_identity()
        if not identity:
            return jsonify({"msg": "Invalid token"}), 422

        # Convert identity to int safely
        try:
            user_id = int(identity)
        except ValueError:
            return jsonify({"msg": "Invalid user id in token"}), 422

        user = User.query.get(user_id)
        if not user:
            return jsonify({"msg": "User not found"}), 404

        return jsonify(user_to_dict(user)), 200

    except Exception as e:
        print("ERROR in /profile:", e)
        traceback.print_exc()
        return jsonify({"msg": f"Profile fetch failed: {str(e)}"}), 500

# ------------------------
# UPDATE PROFILE (Protected)
# ------------------------
@auth_bp.route("/profile", methods=["PATCH", "PUT"])
@jwt_required()
def update_profile():
    try:
        identity = get_jwt_identity()
        if not identity:
            return jsonify({"msg": "Invalid token"}), 422

        try:
            user_id = int(identity)
        except ValueError:
            return jsonify({"msg": "Invalid user id in token"}), 422

        user = User.query.get(user_id)
        if not user:
            return jsonify({"msg": "User not found"}), 404

        data = request.get_json() or {}

        # Update fields safely
        if "firstName" in data: user.first_name = data["firstName"]
        if "lastName" in data: user.last_name = data["lastName"]
        if "phone" in data: user.phone = data["phone"]
        if "email" in data:
            new_email = data["email"].strip().lower()
            existing = User.query.filter(User.email == new_email, User.id != user.id).first()
            if existing:
                return jsonify({"msg": "Email already taken"}), 409
            user.email = new_email
        if "ageGroup" in data: user.age_group = data["ageGroup"]
        if "location" in data: user.location = data["location"]
        if "anonymousName" in data: user.anonymous_name = data["anonymousName"]
        if "bio" in data: user.bio = data["bio"]
        if "website" in data: user.website = data["website"]
        if "profileImage" in data: user.profile_image = data["profileImage"]
        if "password" in data and data["password"]:
            user.password = generate_password_hash(data["password"])

        db.session.commit()
        return jsonify({"msg": "Profile updated successfully", "user": user_to_dict(user)}), 200

    except Exception as e:
        db.session.rollback()
        print("ERROR in /profile PATCH:", e)
        traceback.print_exc()
        return jsonify({"msg": f"Profile update failed: {str(e)}"}), 500
