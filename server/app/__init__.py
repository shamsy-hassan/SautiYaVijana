
import os
from flask import Flask
from .extensions import db, migrate, jwt, cors
from .main.routes import main_bp
from .auth.routes import auth_bp

def create_app():
    app = Flask(__name__)

    # ----- Config -----
    # Prefer DATABASE_URL from env, else fallback to youth.db in project root
    database_url = os.getenv("DATABASE_URL", "sqlite:///instance/youth.db")
    app.config["SQLALCHEMY_DATABASE_URI"] = database_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["SECRET_KEY"] = os.getenv("SECRET_KEY", "dev-secret-change-me")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET_KEY", "dev-jwt-secret-change-me")

    # ----- Extensions -----
    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # CORS (limit to your Vite dev server)
    cors.init_app(app, resources={r"/*": {"origins": os.getenv("CORS_ORIGINS", "http://localhost:5173").split(",")}}, supports_credentials=True)

    # ----- Blueprints -----
    app.register_blueprint(main_bp)
    app.register_blueprint(auth_bp, url_prefix="/auth")

    return app
