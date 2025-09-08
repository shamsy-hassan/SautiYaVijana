from flask import Blueprint, request, jsonify
from app.models import User, db
from flask_jwt_extended import jwt_required, get_jwt_identity
from flask_cors import CORS

profile_bp = Blueprint("profile", __name__)
CORS(profile_bp)

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

@profile_bp.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
        if not user:
            return jsonify({"message": "User not found"}), 404

        return jsonify(user_to_dict(user)), 200
        
    except Exception as e:
        return jsonify({"message": f"Profile fetch failed: {str(e)}"}), 500

@profile_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    try:
        user_id = get_jwt_identity()
        user = User.query.get(user_id)
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
        
    except Exception as e:
        db.session.rollback()
        return jsonify({"message": f"Profile update failed: {str(e)}"}), 500