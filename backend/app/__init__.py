from flask import Flask
from flask_jwt_extended import JWTManager
from flask_cors import CORS
from app.config import config
from app.database import db  # Import from our centralized module
import os

jwt = JWTManager()

def create_app(config_name='default'):
    app = Flask(__name__)
    app.config.from_object(config[config_name])
    
    # Initialize extensions with app
    db.init_app(app)
    jwt.init_app(app)
    CORS(app, supports_credentials=True)
    
    # Import models to ensure they are registered with SQLAlchemy
    from app.models import User
    
    # Register blueprints
    from app.auth.routes import auth_bp
    app.register_blueprint(auth_bp, url_prefix='/auth')
    
    # Create tables with error handling - only do this once
    with app.app_context():
        try:
            db_path = app.config['SQLALCHEMY_DATABASE_URI'].replace('sqlite:///', '')
            
            # Only create tables if the database file doesn't exist yet
            # or if we're not using the reloader
            if not os.path.exists(db_path) or not os.environ.get('WERKZEUG_RUN_MAIN'):
                db.create_all()
                print("Database tables created successfully!")
                
                if os.path.exists(db_path):
                    print(f"Database file created at: {db_path}")
                else:
                    print("Warning: Database file was not created")
        except Exception as e:
            print(f"Error creating database tables: {e}")
            # Don't raise the error, let the app start
    
    return app