# Users API

## POST /users/register

Use this endpoint to register a new user.

### Request Body

- fullname.firstname (required, string, min length: 3)
- fullname.lastname (optional, string, min length: 3)
- email (required, valid email address)
- password (required, string, min length: 6)

### Response

- 200 OK: Returns a JSON object containing a token and user details.
- 400 Bad Request: Returns an array of validation errors.
- 500 Internal Server Error: Occurs if there's a problem creating or saving the user.

## POST /users/login

Use this endpoint to authenticate existing users.

### Request Body

- email (required, valid email address)
- password (required, string, min length: 6)

### Response

- 200 OK: Returns a JSON object containing a token and user details.
- 400 Bad Request: Returns an array of validation errors.
- 401 Unauthorized: Returns if email or password is invalid.
- 500 Internal Server Error: Occurs if there's a problem during login.
