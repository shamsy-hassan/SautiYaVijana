from app import create_app
from app.extensions import db
from app.models import User

app = create_app()

# Optional: make shell context handy: `flask shell`
@app.shell_context_processor
def make_shell_context():
    return {"db": db, "User": User}
