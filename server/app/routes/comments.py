# app/routes/comments.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Comment, db

comments_bp = Blueprint('comments', __name__, url_prefix='/api/comments')

@comments_bp.route('/<int:comment_id>/replies', methods=['POST'])
def add_reply(comment_id):
    try:
        parent_comment = Comment.query.get_or_404(comment_id)
        data = request.get_json()
        
        if not data or not data.get('text'):
            return jsonify({'error': 'Reply text is required'}), 400
        
        reply = Comment(
            text=data.get('text'),
            user_id=data.get('userId'),  # Get from request data
            issue_id=parent_comment.issue_id,
            parent_id=comment_id
        )
        
        db.session.add(reply)
        db.session.commit()
        
        return jsonify(reply.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@comments_bp.route('/<int:comment_id>/reactions', methods=['POST'])
def add_reaction(comment_id):
    try:
        comment = Comment.query.get_or_404(comment_id)
        data = request.get_json()
        emoji = data.get('emoji')
        
        if not emoji:
            return jsonify({'error': 'Emoji required'}), 400
            
        # Use a session-based identifier for reactions
        user_identifier = request.remote_addr
            
        # Initialize reactions if None
        if comment.reactions is None:
            comment.reactions = []
        
        # Find existing reaction for this emoji
        existing_reaction = None
        for reaction in comment.reactions:
            if reaction.get('emoji') == emoji:
                existing_reaction = reaction
                break
        
        if existing_reaction:
            # Check if user already reacted with this emoji
            if user_identifier in existing_reaction.get('users', []):
                # Remove user's reaction
                existing_reaction['users'].remove(user_identifier)
                existing_reaction['count'] = len(existing_reaction['users'])
                if existing_reaction['count'] == 0:
                    comment.reactions.remove(existing_reaction)
            else:
                # Add user's reaction
                existing_reaction['users'].append(user_identifier)
                existing_reaction['count'] = len(existing_reaction['users'])
        else:
            # Create new reaction
            new_reaction = {
                'emoji': emoji,
                'users': [user_identifier],
                'count': 1
            }
            comment.reactions.append(new_reaction)
        
        # Mark the field as modified for SQLAlchemy
        db.session.merge(comment)
        db.session.commit()
        
        return jsonify(comment.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500