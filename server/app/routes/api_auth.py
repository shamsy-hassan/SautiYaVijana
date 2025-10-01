# app/routes/api_auth.py
from flask import Blueprint, request, jsonify
from werkzeug.security import check_password_hash, generate_password_hash
from flask_jwt_extended import create_access_token
from app.models import User, db
import datetime

api_auth_bp = Blueprint('api_auth', __name__, url_prefix='/api/auth')

@api_auth_bp.route('/login', methods=['POST'])
def api_login():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Missing JSON data"}), 400

        email = (data.get("email") or "").strip().lower()
        password = (data.get("password") or "").strip()

        if not email or not password:
            return jsonify({"error": "Email and password required"}), 400

        user = User.query.filter_by(email=email).first()
        if not user or not check_password_hash(user.password, password):
            return jsonify({"error": "Invalid email or password"}), 401

        access_token = create_access_token(
            identity=str(user.id),
            expires_delta=datetime.timedelta(days=1)
        )

        return jsonify({
            "access_token": access_token,
            "user": {
                "id": user.id,
                "displayName": user.anonymous_name or f"{user.first_name} {user.last_name}".strip() or "Anonymous User",
                "firstName": user.first_name,
                "lastName": user.last_name,
                "email": user.email,
                "phone": user.phone,
                "ageGroup": user.age_group,
                "location": user.location,
                "anonymousName": user.anonymous_name,
                "bio": user.bio,
                "website": user.website,
                "profileImage": user.profile_image
            }
        }), 200

    except Exception as e:
        return jsonify({"error": f"Login failed: {str(e)}"}), 500

@api_auth_bp.route('/register', methods=['POST'])
def api_register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"error": "Missing JSON data"}), 400

        email = (data.get("email") or "").strip().lower()
        password = (data.get("password") or "").strip()
        first_name = data.get("firstName")
        last_name = data.get("lastName")

        if not email or not password:
            return jsonify({"error": "Email and password required"}), 400

        if User.query.filter_by(email=email).first():
            return jsonify({"error": "Email already registered"}), 400

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

        access_token = create_access_token(
            identity=str(new_user.id),
            expires_delta=datetime.timedelta(days=1)
        )

        return jsonify({
            "access_token": access_token,
            "user": {
                "id": new_user.id,
                "displayName": new_user.anonymous_name or f"{new_user.first_name} {new_user.last_name}".strip() or "Anonymous User",
                "firstName": new_user.first_name,
                "lastName": new_user.last_name,
                "email": new_user.email,
                "phone": new_user.phone,
                "ageGroup": new_user.age_group,
                "location": new_user.location,
                "anonymousName": new_user.anonymous_name,
                "bio": new_user.bio,
                "website": new_user.website,
                "profileImage": new_user.profile_image
            }
        }), 201

    except Exception as e:
        db.session.rollback()
        return jsonify({"error": f"Registration failed: {str(e)}"}), 500