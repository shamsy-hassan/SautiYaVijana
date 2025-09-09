from flask import Blueprint, request, jsonify
from app.models import User, db
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from werkzeug.security import check_password_hash, generate_password_hash
from datetime import timedelta
auth_bp = Blueprint("auth", __name__)

# ✅ Register user
@auth_bp.route("/register", methods=["POST"])
def register():
    data = request.get_json()

    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"message": "Email and password are required"}), 400

    if User.query.filter_by(email=data.get("email").lower()).first():
        return jsonify({"message": "Email already registered"}), 400

    # ⚠️ Store password hashed for security
    hashed_password = generate_password_hash(data.get("password"))

    new_user = User(
        first_name=data.get("firstName"),
        last_name=data.get("lastName"),
        phone=data.get("phone"),
        email=data.get("email").lower(),
        password=hashed_password,
        age_group=data.get("ageGroup"),
        location=data.get("location"),
        anonymous_name=data.get("anonymousName"),
        bio=data.get("bio"),
        website=data.get("website"),
        profile_image=data.get("profileImage"),
    )
    db.session.add(new_user)
    db.session.commit()

    access_token = create_access_token(identity=new_user.id)
    return jsonify({
        "user": {
            "id": new_user.id,
            "firstName": new_user.first_name,
            "lastName": new_user.last_name,
            "phone": new_user.phone,
            "email": new_user.email,
            "ageGroup": new_user.age_group,
            "location": new_user.location,
            "anonymousName": new_user.anonymous_name,
            "bio": new_user.bio,
            "website": new_user.website,
            "profileImage": new_user.profile_image
        },
        "access_token": access_token
    }), 201


# ✅ Login user
@auth_bp.route("/login", methods=["POST"])  # 🔹 removed extra /auth prefix
def login():
    data = request.get_json()

    if not data or not data.get("email") or not data.get("password"):
        return jsonify({"message": "Email and password are required"}), 400

    user = User.query.filter_by(email=data["email"].lower()).first()

    if not user or not check_password_hash(user.password, data["password"]):
        return jsonify({"message": "Invalid email or password"}), 401

   access_token = create_access_token(identity=user.id, expires_delta=timedelta(days=1))

    return jsonify({
        "message": "Login successful",
        "user": {
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
            "profileImage": user.profile_image
        },
        "access_token": access_token
    }), 200


# ✅ Fetch profile (returns camelCase for frontend)
@auth_bp.route("/profile", methods=["GET"])
@jwt_required()
def profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    return jsonify({
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
        "profileImage": user.profile_image
    }), 200


# ✅ Update profile (accepts camelCase from frontend)
@auth_bp.route("/profile", methods=["PUT"])
@jwt_required()
def update_profile():
    user_id = get_jwt_identity()
    user = User.query.get(user_id)

    if not user:
        return jsonify({"message": "User not found"}), 404

    data = request.get_json()
    user.first_name = data.get("firstName", user.first_name)
    user.last_name = data.get("lastName", user.last_name)
    user.phone = data.get("phone", user.phone)
    user.age_group = data.get("ageGroup", user.age_group)
    user.location = data.get("location", user.location)
    user.anonymous_name = data.get("anonymousName", user.anonymous_name)
    user.bio = data.get("bio", user.bio)
    user.website = data.get("website", user.website)
    user.profile_image = data.get("profileImage", user.profile_image)

    db.session.commit()

    return jsonify({
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
        "profileImage": user.profile_image
    }), 200
