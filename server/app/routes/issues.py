# app/routes/issues.py
from flask import Blueprint, request, jsonify
from flask_jwt_extended import jwt_required, get_jwt_identity
from app.models import Issue, Comment, User
from app import db

issues_bp = Blueprint('issues', __name__, url_prefix='/api/issues')

@issues_bp.route('', methods=['GET'])
def get_issues():
    try:
        issues = Issue.query.order_by(Issue.created_at.desc()).all()
        return jsonify([issue.to_dict() for issue in issues])
    except Exception as e:
        return jsonify({'error': str(e)}), 500

@issues_bp.route('', methods=['POST'])
@jwt_required()
def create_issue():
    try:
        current_user_id = get_jwt_identity()
        data = request.get_json()
        
        issue = Issue(
            village=data.get('village'),
            ward=data.get('ward'),
            issue=data.get('issue'),
            suggestion=data.get('suggestion', ''),
            user_id=current_user_id
        )
        
        db.session.add(issue)
        db.session.commit()
        
        return jsonify(issue.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>', methods=['PUT'])
@jwt_required()
def update_issue(issue_id):
    try:
        current_user_id = get_jwt_identity()
        issue = Issue.query.get_or_404(issue_id)
        
        # Check if user owns the issue or is admin
        if issue.user_id != current_user_id:
            return jsonify({'error': 'Unauthorized'}), 403
            
        data = request.get_json()
        
        issue.village = data.get('village', issue.village)
        issue.ward = data.get('ward', issue.ward)
        issue.issue = data.get('issue', issue.issue)
        issue.suggestion = data.get('suggestion', issue.suggestion)
        
        db.session.commit()
        
        return jsonify(issue.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>', methods=['DELETE'])
@jwt_required()
def delete_issue(issue_id):
    try:
        current_user_id = get_jwt_identity()
        issue = Issue.query.get_or_404(issue_id)
        
        # Check if user owns the issue or is admin
        if issue.user_id != current_user_id:
            return jsonify({'error': 'Unauthorized'}), 403
            
        db.session.delete(issue)
        db.session.commit()
        
        return jsonify({'message': 'Issue deleted successfully'})
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/upvote', methods=['POST'])
def upvote_issue(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        voter_id = data.get('voterId')
        
        if not voter_id:
            return jsonify({'error': 'Voter ID required'}), 400
            
        if voter_id in issue.voters:
            # Remove upvote if already voted
            issue.voters.remove(voter_id)
            issue.upvotes -= 1
        else:
            # Add upvote
            issue.voters.append(voter_id)
            issue.upvotes += 1
            
        db.session.commit()
        
        return jsonify(issue.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/resolve', methods=['PATCH'])
@jwt_required()
def toggle_resolve_issue(issue_id):
    try:
        current_user_id = get_jwt_identity()
        issue = Issue.query.get_or_404(issue_id)
        
        # Check if user owns the issue or is admin
        if issue.user_id != current_user_id:
            return jsonify({'error': 'Unauthorized'}), 403
            
        data = request.get_json()
        resolved = data.get('resolved')
        
        if resolved is not None:
            issue.resolved = resolved
            db.session.commit()
        
        return jsonify(issue.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/comments', methods=['POST'])
@jwt_required()
def add_comment(issue_id):
    try:
        current_user_id = get_jwt_identity()
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        
        comment = Comment(
            text=data.get('text'),
            user_id=current_user_id,
            issue_id=issue_id,
            parent_id=data.get('parentId')
        )
        
        db.session.add(comment)
        db.session.commit()
        
        return jsonify(comment.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

# Register the blueprint in your app/__init__.py