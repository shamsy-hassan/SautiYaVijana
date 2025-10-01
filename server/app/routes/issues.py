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
def create_issue():
    try:
        # For now, remove JWT requirement to debug
        data = request.get_json()
        
        print(f"Received data: {data}")  # Debug print
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
            
        # Validate required fields
        if not data.get('village') or not data.get('ward') or not data.get('issue'):
            return jsonify({'error': 'Village, ward, and issue description are required'}), 400
        
        issue = Issue(
            village=data.get('village'),
            ward=data.get('ward'),
            issue=data.get('issue'),
            suggestion=data.get('suggestion', ''),
            user_id=data.get('userId')  # Get from request data
        )
        
        db.session.add(issue)
        db.session.commit()
        
        return jsonify(issue.to_dict()), 201
    except Exception as e:
        db.session.rollback()
        print(f"Error creating issue: {str(e)}")  # Debug print
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>', methods=['PUT'])
def update_issue(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
        
        # Update the issue fields
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
def delete_issue(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        
        # Delete all comments associated with this issue first
        for comment in issue.comments:
            db.session.delete(comment)
        
        # Delete the issue
        db.session.delete(issue)
        db.session.commit()
        
        return jsonify({'message': 'Issue deleted successfully'})
    except Exception as e:
        db.session.rollback()
        print(f"Error deleting issue: {str(e)}")  # Debug print
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/upvote', methods=['POST'])
def upvote_issue(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        voter_id = data.get('voterId')
        
        print(f"Upvote request - Issue {issue_id}, Voter ID: {voter_id}")  # Debug log
        
        if not voter_id:
            return jsonify({'error': 'Voter ID required'}), 400
            
        # Ensure voters is a list (initialize if None)
        if issue.voters is None:
            issue.voters = []
            
        # Ensure upvotes is not None
        if issue.upvotes is None:
            issue.upvotes = 0
            
        print(f"Current voters list: {issue.voters}")  # Debug log
        print(f"Current upvotes count: {issue.upvotes}")  # Debug log
            
        if voter_id in issue.voters:
            # Remove upvote if already voted (toggle off)
            issue.voters.remove(voter_id)
            issue.upvotes = max(0, issue.upvotes - 1)  # Ensure upvotes doesn't go negative
            print(f"Vote removed for issue {issue_id} by voter {voter_id}")  # Debug log
        else:
            # Add upvote (toggle on)
            issue.voters.append(voter_id)
            issue.upvotes += 1
            print(f"Vote added for issue {issue_id} by voter {voter_id}")  # Debug log
            
        print(f"Updated voters list: {issue.voters}")  # Debug log
        print(f"Updated upvotes count: {issue.upvotes}")  # Debug log
            
        db.session.commit()
        
        return jsonify(issue.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/resolve', methods=['PATCH'])
def toggle_resolve_issue(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        
        if not data:
            return jsonify({'error': 'No data provided'}), 400
            
        resolved = data.get('resolved')
        
        if resolved is not None:
            issue.resolved = resolved
            db.session.commit()
        
        return jsonify(issue.to_dict())
    except Exception as e:
        db.session.rollback()
        return jsonify({'error': str(e)}), 500

@issues_bp.route('/<int:issue_id>/comments', methods=['POST'])
def add_comment(issue_id):
    try:
        issue = Issue.query.get_or_404(issue_id)
        data = request.get_json()
        
        print(f"Adding comment: {data}")  # Debug print
        
        if not data or not data.get('text'):
            return jsonify({'error': 'Comment text is required'}), 400
        
        comment = Comment(
            text=data.get('text'),
            user_id=data.get('userId'),  # Get from request data
            issue_id=issue_id,
            parent_id=data.get('parentId')
        )
        
        db.session.add(comment)
        db.session.commit()
        
        return jsonify(comment.to_dict())
    except Exception as e:
        db.session.rollback()
        print(f"Error adding comment: {str(e)}")  # Debug print
        return jsonify({'error': str(e)}), 500