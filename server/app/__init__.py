# app/__init__.py
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

# Initialize extensions
db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)

    # Database config
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///youth.db"
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    # JWT config
    app.config["JWT_SECRET_KEY"] = "super-secret-key"  # change for production
    app.config["JWT_TOKEN_LOCATION"] = ["headers"]
    app.config["JWT_HEADER_NAME"] = "Authorization"
    app.config["JWT_HEADER_TYPE"] = "Bearer"

    # Enable CORS for frontend
    CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

    # Initialize extensions
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # Import and register blueprints (import here to avoid circular import)
    from app.routes.auth import auth_bp
    from app.routes.main import main_bp
    from app.routes.issues import issues_bp
    from app.routes.users import users_bp
    from app.routes.api_auth import api_auth_bp
    from app.routes.comments import comments_bp

    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(main_bp)
    app.register_blueprint(issues_bp)
    app.register_blueprint(users_bp)
    app.register_blueprint(api_auth_bp)
    app.register_blueprint(comments_bp)

    return app
