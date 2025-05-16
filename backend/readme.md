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

## GET /users/profile

Use this endpoint to retrieve the current user's profile.

### Request

- Requires a valid token (sent as a cookie or in the Authorization header).

### Response

- 200 OK: Returns the current user's data.
- 401 Unauthorized: No valid token provided.
- 500 Internal Server Error: Unexpected server error.

## GET /users/logout

Use this endpoint to log out the user by clearing the cookie and blacklisting the token.

### Response

- 200 OK: Returns a logout confirmation message.
- 401 Unauthorized: No valid token provided.
- 500 Internal Server Error: Unexpected server error.

## Captains API

### POST /captains/register

Use this endpoint to register a new captain.

#### Request Body

- fullname.firstname (required, string)
- fullname.lastname (optional, string)
- email (required, valid email address)
- password (required, string, min length: 6)
- vehicle.color (required, string)
- vehicle.plate (required, string)
- vehicle.capacity (required, integer ≥ 1)
- vehicle.vehicleType (required, must be one of "car", "bike", "auto")

#### Response

- 200 OK: Returns the newly created captain.
- 400 Bad Request: Returns an array of validation errors.
- 500 Internal Server Error: Occurs if there's a problem creating the captain.
