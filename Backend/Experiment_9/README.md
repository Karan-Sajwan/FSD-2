# Authentication Experiments API

This project is a Flask-based backend that demonstrates multiple authentication mechanisms and how to protect API routes using them. It is deployed on Render and tested using Postman.

## Features

- Basic Authentication protected route (`/basic-protected`)
- Custom token-based authentication using a custom header (`/token-login`, `/token-protected`)
- JWT-based authentication using `flask-jwt-extended` (`/jwt-login`, `/jwt-protected`)
- Clear JSON success messages for each authentication method
- Ready to use with Postman or any HTTP client

## Tech Stack

- **Language:** Python
- **Framework:** Flask
- **Authentication:**
  - Basic Auth (username/password in `Authorization` header)
  - Custom token authentication (token in `x-auth-token` header)
  - JWT authentication using `flask-jwt-extended`
- **Deployment:** Render
- **API Testing:** Postman

Base URL (Render):

```text
https://experiment-9-23bis70054.onrender.com

## Learning Outcome
- Learnt about backend technologies
- Learnt to create virtual enviroment of python using venv
- Leant to code in flask
- Learnt about flask in python
- Learnt to route in flask