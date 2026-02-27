# Experiment 9:-Implement authentication using JWT
This project is a Flask-based backend that demonstrates multiple authentication mechanisms and how to protect API routes using them. It is deployed on Render and tested using Postman.
---
## What we have done
- Calling `GET /basic-protected` using **Basic Auth** in Postman with username `john` and password `john123`, and receiving `Basic Auth Success. Welcome john!`.
![alt text](<Screenshot 2026-02-27 103933.png>)
- Sending a `POST /token-login` request with the same admin credentials and receiving a custom token value (e.g. `YWRtaW4=`) in the `token` field.
![alt text](<Screenshot 2026-02-27 104353.png>)
- Calling `GET /token-protected` while passing the custom token in the `x-auth-token` header and receiving `Token Auth Success. Welcome admin!`.
![alt text](<Screenshot 2026-02-27 104703.png>)
- Sending a `POST /jwt-login` request with JSON body `{ "username": "admin", "password": "admin123" }` and receiving a JWT `access_token` in the response.
![alt text](<Screenshot 2026-02-27 104818.png>)
- Using Postman **Bearer Token** auth to call `GET /jwt-protected` with the received JWT and getting the message: `JWT Auth Success. Welcome admin!`.
![alt text](<Screenshot 2026-02-27 104917.png>)
---
## Learning Outcome
- Learnt about backend technologies
- Learnt to create virtual enviroment of python using venv
- Leant to code in flask
- Learnt about flask in python
- Learnt to route in flask