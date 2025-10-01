# app/models.py
from datetime import datetime
from app import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(100))
    last_name = db.Column(db.String(100))
    phone = db.Column(db.String(20))
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), nullable=False)
    age_group = db.Column(db.String(50))
    location = db.Column(db.String(100))
    anonymous_name = db.Column(db.String(100))
    bio = db.Column(db.Text)
    website = db.Column(db.String(200))
    profile_image = db.Column(db.String(200))


class Issue(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    village = db.Column(db.String(100), nullable=False)
    ward = db.Column(db.String(50), nullable=False)
    issue = db.Column(db.Text, nullable=False)
    suggestion = db.Column(db.Text)
    upvotes = db.Column(db.Integer, default=0)
    resolved = db.Column(db.Boolean, default=False)
    created_at = db.Column(db.DateTime, default=datetime.utcnow)
    updated_at = db.Column(db.DateTime, default=datetime.utcnow, onupdate=datetime.utcnow)
    
    # Foreign key to User
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    user = db.relationship('User', backref=db.backref('issues', lazy=True))
    
    # For anonymous voting tracking
    voters = db.Column(db.JSON, default=list)
    
    def to_dict(self):
        # Handle user name for both authenticated and anonymous users
        if self.user:
            user_name = self.user.anonymous_name or f"{self.user.first_name} {self.user.last_name}".strip() or "Anonymous User"
        else:
            user_name = "Anonymous User"
            
        return {
            'id': self.id,
            'village': self.village,
            'ward': self.ward,
            'issue': self.issue,
            'suggestion': self.suggestion,
            'upvotes': self.upvotes,
            'resolved': self.resolved,
            'created_at': self.created_at.isoformat(),
            'updated_at': self.updated_at.isoformat(),
            'user_id': self.user_id,
            'userName': user_name,
            'voters': self.voters or [],
            'comments': [comment.to_dict() for comment in self.comments]
        }

class Comment(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    text = db.Column(db.Text, nullable=False)
    timestamp = db.Column(db.DateTime, default=datetime.utcnow)
    
    # Foreign keys
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=True)
    issue_id = db.Column(db.Integer, db.ForeignKey('issue.id'), nullable=False)
    parent_id = db.Column(db.Integer, db.ForeignKey('comment.id'), nullable=True)
    
    # Relationships
    user = db.relationship('User', backref=db.backref('comments', lazy=True))
    issue = db.relationship('Issue', backref=db.backref('comments', lazy=True))
    parent = db.relationship('Comment', remote_side=[id], backref=db.backref('replies', lazy=True))
    
    # For emoji reactions
    reactions = db.Column(db.JSON, default=list)
    
    def to_dict(self):
        # Handle user name for both authenticated and anonymous users
        if self.user:
            user_name = self.user.anonymous_name or f"{self.user.first_name} {self.user.last_name}".strip() or "Anonymous User"
        else:
            user_name = "Anonymous User"
            
        return {
            'id': self.id,
            'text': self.text,
            'timestamp': self.timestamp.isoformat(),
            'user_id': self.user_id,
            'userName': user_name,
            'issue_id': self.issue_id,
            'parent_id': self.parent_id,
            'reactions': self.reactions or [],
            'replies': [reply.to_dict() for reply in self.replies]
        }
