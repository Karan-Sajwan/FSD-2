import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# -----------------------------
# DATABASE CONFIG (ENV BASED)
# -----------------------------
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB')

mysql = MySQL(app)

# -----------------------------
# ROUTES
# -----------------------------

# Home route (IMPORTANT for Render health check)
@app.route('/')
def home():
    return jsonify({"message": "API is running"})

# CREATE
@app.route('/add', methods=['POST'])
def add_student():
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    age = data.get('age')

    # Validation
    if not name or not email or not age:
        return jsonify({"error": "All fields are required"}), 400

    cur = mysql.connection.cursor()
    cur.execute(
        "INSERT INTO student (name, email, age) VALUES (%s, %s, %s)",
        (name, email, age)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student added successfully"}), 201


# READ (ALL)
@app.route('/students', methods=['GET'])
def get_students():
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student")
    rows = cur.fetchall()
    cur.close()

    students = []
    for row in rows:
        students.append({
            "id": row[0],
            "name": row[1],
            "email": row[2],
            "age": row[3]
        })

    return jsonify(students)


# READ (ONE)
@app.route('/student/<int:id>', methods=['GET'])
def get_student(id):
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM student WHERE id = %s", (id,))
    row = cur.fetchone()
    cur.close()

    if not row:
        return jsonify({"error": "Student not found"}), 404

    student = {
        "id": row[0],
        "name": row[1],
        "email": row[2],
        "age": row[3]
    }

    return jsonify(student)


# UPDATE
@app.route('/update/<int:id>', methods=['PUT'])
def update_student(id):
    data = request.get_json()

    name = data.get('name')
    email = data.get('email')
    age = data.get('age')

    if not name or not email or not age:
        return jsonify({"error": "All fields are required"}), 400

    cur = mysql.connection.cursor()
    cur.execute(
        "UPDATE student SET name=%s, email=%s, age=%s WHERE id=%s",
        (name, email, age, id)
    )
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student updated successfully"})


# DELETE
@app.route('/delete/<int:id>', methods=['DELETE'])
def delete_student(id):
    cur = mysql.connection.cursor()
    cur.execute("DELETE FROM student WHERE id=%s", (id,))
    mysql.connection.commit()
    cur.close()

    return jsonify({"message": "Student deleted successfully"})


# -----------------------------
# RUN SERVER (RENDER COMPATIBLE)
# -----------------------------
if __name__ == '__main__':
    port = int(os.environ.get("PORT", 5000))
    app.run(host='0.0.0.0', port=port)