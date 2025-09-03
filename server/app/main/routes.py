
from flask import Blueprint, jsonify

main_bp = Blueprint("main", __name__)

@main_bp.get("/")
def root():
    return jsonify({"status": "ok", "service": "youth-backend"}), 200

@main_bp.get("/health")
def health():
    return jsonify({"status": "healthy"}), 200
