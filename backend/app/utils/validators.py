import re
from email_validator import validate_email, EmailNotValidError

def validate_phone(phone):
    # Basic phone validation for Kenyan numbers
    pattern = r'^(\+254|0)[17]\d{8}$'
    return re.match(pattern, phone) is not None

def validate_email_format(email):
    try:
        validate_email(email)
        return True
    except EmailNotValidError:
        return False

def validate_password(password):
    # At least 8 characters, one uppercase, one lowercase, one number
    if len(password) < 8:
        return False, "Password must be at least 8 characters long"
    
    if not any(char.isupper() for char in password):
        return False, "Password must contain at least one uppercase letter"
    
    if not any(char.islower() for char in password):
        return False, "Password must contain at least one lowercase letter"
    
    if not any(char.isdigit() for char in password):
        return False, "Password must contain at least one number"
    
    return True, "Password is valid"