## Experiment No. 8 - Develop RESTful APIs using Backend Framework (Flask)

## Project Structure

```bash
Experiment_9/
├── venv/
│   ├── Include/
│   ├── Lib/
│   └── Scripts/
├── requiement.txt
├── app.py
└── README.md
```

## JWT Methods
|Method      | Header Used           | Stateless? | Secure?     |
|------------|---------------------|----------|----------- |
| Basic Auth   | Authorization         | Yes        | Weak      |
| Base64 Token | x-auth-token          | Yes        | Very Weak |
| JWT          | Authorization: Bearer | Yes        | ✅ Strong    |


## STEPS & SCREENSHOTS
### 1. Server Start & Running
![Server Running](Screenshots/1.png)
Render development server successfully started.

### 2. READ ALL Students (GET)
![Root Endpoint](Screenshots/2.png)

Not added any student data till now

### 3. CREATE Student (POST)
![Create Student 1](Screenshots/3.png)

### Create Another Student
![Create Student 2](Screenshots/4.png)

### 4. READ ALL Students (GET)
![Read All Students](Screenshots/5.png)

### 5. READ ONE Student
### GET Student ID = 1
![Read One - ID 1](Screenshots/6.png)

### GET Student ID = 2
![Read One - ID 2](Screenshots/7.png)

### 6. UPDATE Student (PUT)
![Update Student](Screenshots/8.png)

### 7. DELETE Student
![Delete Student](Screenshots/9.png)
### READ After Deletion
![Read After Delete](Screenshots/10.png)


## API Endpoints Summary
| Method | Endpoint | Description |
|--------|----------|------------|
| POST   | /students | Create new student |
| GET    | /students | Get all students |
| GET    | /students/<id> | Get student by ID |
| PUT    | /students/<id> | Update student |
| DELETE | /students/<id> | Delete student |

## Learning Outcome
- Learnt about backend technologies
- Learnt to create virtual enviroment of python using venv
- Leant to code in flask
- Learnt about flask in python
- Learnt to route in flask