from flask import Blueprint, request, jsonify
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import generate_password_hash, check_password_hash

auth_bp = Blueprint("auth", __name__)

# Helper to serialize user
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

# ----------------------------
# Register
# ----------------------------
@auth_bp.route("/register", methods=["POST"])
def register():
    try:
        data = request.get_json()
        if not data:
            return jsonify({"message": "No data provided"}), 400

        # Check if email already exists
        existing_user = User.query.filter_by(email=data.get("email").lower().strip()).first()
        if existing_user:
            return jsonify({"message": "Email already registered"}), 400

        # Validate required fields
        required_fields = ["firstName", "lastName", "email", "password"]
        for field in required_fields:
            if not data.get(field):
                return jsonify({"message": f"{field} is required"}), 400

        new_user = User(
            first_name=data.get("firstName"),
            last_name=data.get("lastName"),
            phone=data.get("phone"),
            email=data.get("email").lower().strip(),
            password=generate_password_hash(data.get("password")),
            age_group=data.get("ageGroup"),
            location=data.get("location"),
            anonymous_name=data.get("anonymousName"),
            bio=data.get("bio"),
            website=data.get("website"),
            profile_image=data.get("profileImage"),
        )
        
        db.session.add(new_user)
        db.session.commit()

        # Convert user ID to string for JWT compatibility
        access_token = create_access_token(identity=str(new_user.id))
        return jsonify({
            "message": "Registration successful",
            "user": user_to_dict(new_user), 
            "access_token": access_token
        }), 201
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Registration failed: {str(e)}"}), 500

# ----------------------------
# Login
# ----------------------------
@auth_bp.route("/login", methods=["POST"])
def login():
    try:
        data = request.get_json()
        print("DEBUG login data:", data)

        if not data or not data.get("email") or not data.get("password"):
            return jsonify({"message": "Email and password are required"}), 400

        user = User.query.filter_by(email=data["email"].lower().strip()).first()
        if not user or not check_password_hash(user.password, data["password"]):
            return jsonify({"message": "Invalid email or password"}), 401

        # Convert user ID to string for JWT compatibility
        access_token = create_access_token(identity=str(user.id))

        return jsonify({
            "message": "Login successful",
            "user": user_to_dict(user),
            "access_token": access_token
        }), 200
        
    except Exception as e:
        return jsonify({"message": f"Login failed: {str(e)}"}), 500

# ----------------------------
# Get profile
# ----------------------------
@auth_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    try:
        user_id = get_jwt_identity()
        print(f"DEBUG: JWT identity received: {user_id}, type: {type(user_id)}")
        
        # Convert to integer since your database uses integer IDs
        user = User.query.get(int(user_id))
        if not user:
            return jsonify({"message": "User not found"}), 404

        return jsonify(user_to_dict(user)), 200
        
    except ValueError:
        return jsonify({"message": "Invalid user ID format"}), 400
    except Exception as e:
        return jsonify({"message": f"Profile fetch failed: {str(e)}"}), 500

# ----------------------------
# Update profile
# ----------------------------
@auth_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(int(user_id))  # Convert to integer
        if not user:
            return jsonify({"message": "User not found"}), 404

        data = request.get_json()
        if not data:
            return jsonify({"message": "No data provided"}), 400

        # Update fields if provided
        if "firstName" in data:
            user.first_name = data["firstName"]
        if "lastName" in data:
            user.last_name = data["lastName"]
        if "phone" in data:
            user.phone = data["phone"]
        if "ageGroup" in data:
            user.age_group = data["ageGroup"]
        if "location" in data:
            user.location = data["location"]
        if "anonymousName" in data:
            user.anonymous_name = data["anonymousName"]
        if "bio" in data:
            user.bio = data["bio"]
        if "website" in data:
            user.website = data["website"]
        if "profileImage" in data:
            user.profile_image = data["profileImage"]

        db.session.commit()
        return jsonify(user_to_dict(user)), 200
        
    except ValueError:
        return jsonify({"message": "Invalid user ID format"}), 400
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Profile update failed: {str(e)}"}), 500

# ----------------------------
# Test endpoint
# ----------------------------
@auth_bp.route("/test", methods=["GET"])
def test_connection():
    return jsonify({"message": "✅ Auth service is running!"}), 200