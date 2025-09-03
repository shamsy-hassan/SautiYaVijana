from marshmallow import Schema, fields, validate

class RegisterSchema(Schema):
    firstName = fields.Str(required=True, validate=validate.Length(min=1))
    lastName = fields.Str(required=True, validate=validate.Length(min=1))
    anonymousName = fields.Str(required=True, validate=validate.Length(min=1))
    email = fields.Email(required=True)
    phone = fields.Str(required=False, allow_none=True)
    password = fields.Str(required=True, validate=validate.Length(min=6))
    confirmPassword = fields.Str(required=True)
    ageGroup = fields.Str(required=False)
    location = fields.Str(required=False)
    bio = fields.Str(required=False)
    website = fields.Str(required=False)

class LoginSchema(Schema):
    email = fields.Email(required=True)
    password = fields.Str(required=True)
