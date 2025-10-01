# app/routes/users.py
from flask import Blueprint, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import User

users_bp = Blueprint('users', __name__, url_prefix='/api/users')

@users_bp.route('/me', methods=['GET'])
@jwt_required()
def get_current_user():
    try:
        current_user_id = get_jwt_identity()
        user = User.query.get_or_404(current_user_id)
        
        return jsonify({
            'id': user.id,
            'displayName': user.anonymous_name or f"{user.first_name} {user.last_name}".strip() or "Anonymous User",
            'firstName': user.first_name,
            'lastName': user.last_name,
            'email': user.email,
            'phone': user.phone,
            'ageGroup': user.age_group,
            'location': user.location,
            'anonymousName': user.anonymous_name,
            'bio': user.bio,
            'website': user.website,
            'profileImage': user.profile_image
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500