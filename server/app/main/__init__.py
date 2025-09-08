from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_jwt_extended import JWTManager
from flask_cors import CORS

db = SQLAlchemy()
migrate = Migrate()
jwt = JWTManager()

def create_app():
    app = Flask(__name__)

    # Config
    app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///tana_river_youth.db"
    app.config["JWT_SECRET_KEY"] = "super-secret-key"  # change in production

    db.init_app(app)
    migrate.init_app(app, db)
    jwt.init_app(app)

    # ✅ Enable CORS for all routes
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)

    # ✅ Register blueprints
    from app.auth import auth_bp
    from app.routes import main_bp, users_bp

    app.register_blueprint(auth_bp)              # check if you used url_prefix here
    app.register_blueprint(main_bp)
    app.register_blueprint(users_bp)

    return app
