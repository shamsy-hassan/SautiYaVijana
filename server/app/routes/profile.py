from flask import Blueprint, request, jsonify
from app.models import User, db
from flask_jwt_extended import jwt_required, get_jwt_identity

profile_bp = Blueprint("profile", __name__)

# GET PROFILE
@profile_bp.route("/profile", methods=["GET"])
@jwt_required()
def get_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404
    return jsonify(user.to_dict())

# UPDATE PROFILE
@profile_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)
    if not user:
        return jsonify({"msg": "User not found"}), 404

    data = request.get_json()

    # Fields we allow to update
    update_fields = {
        "firstName": "first_name",
        "lastName": "last_name",
        "phone": "phone",
        "ageGroup": "age_group",
        "location": "location",
        "anonymousName": "anonymous_name",
        "website": "website",
        "bio": "bio",
        "profileImage": "profile_image"
    }

    for key, attr in update_fields.items():
        if key in data:
            setattr(user, attr, data[key])

    db.session.commit()
    return jsonify(user.to_dict())
