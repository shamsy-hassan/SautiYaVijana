from flask import Blueprint, request, jsonify
from sqlalchemy.exc import IntegrityError
from flask_jwt_extended import create_access_token, jwt_required, get_jwt_identity
from ..extensions import db
from ..models import User
from ..schemas import RegisterSchema, LoginSchema

auth_bp = Blueprint("auth", __name__)
register_schema = RegisterSchema()
login_schema = LoginSchema()


# ----- REGISTER -----
@auth_bp.post("/register")
def register():
    payload = request.get_json(silent=True) or {}
    errors = register_schema.validate(payload)
    if errors:
        return jsonify({"message": "Validation error", "errors": errors}), 400

    if payload["password"] != payload["confirmPassword"]:
        return jsonify({"message": "Passwords do not match"}), 400

    user = User(
        first_name=payload["firstName"].strip(),
        last_name=payload["lastName"].strip(),
        anonymous_name=payload["anonymousName"].strip(),
        email=payload["email"].lower().strip(),
        phone=payload.get("phone"),
        age_group=payload.get("ageGroup"),
        location=payload.get("location"),
        bio=payload.get("bio"),
        website=payload.get("website"),
    )
    user.password = payload["password"]

    try:
        db.session.add(user)
        db.session.commit()
    except IntegrityError:
        db.session.rollback()
        return jsonify({"message": "Email already in use"}), 409

    return jsonify(
        {"message": "Registered successfully", "user": user.to_safe_dict()}
    ), 201


# ----- LOGIN -----
@auth_bp.post("/login")
def login():
    payload = request.get_json(silent=True) or {}
    errors = login_schema.validate(payload)
    if errors:
        return jsonify({"message": "Validation error", "errors": errors}), 400

    user = User.query.filter_by(email=payload["email"].lower().strip()).first()
    if not user or not user.verify_password(payload["password"]):
        return jsonify({"message": "Invalid email or password"}), 401

    token = create_access_token(identity=str(user.id))
    return jsonify({"access_token": token, "user": user.to_safe_dict()}), 200


# ----- CURRENT USER -----
@auth_bp.get("/me")
@jwt_required()
def me():
    uid = get_jwt_identity()
    user = User.query.get(int(uid))
    if not user:
        return jsonify({"message": "User not found"}), 404
    return jsonify({"user": user.to_safe_dict()}), 200
