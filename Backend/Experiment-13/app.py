import os
from flask import Flask, request, jsonify
from flask_mysqldb import MySQL

app = Flask(__name__)

# Use environment variables (RENDER NEEDS THIS)
app.config['MYSQL_HOST'] = os.getenv('MYSQL_HOST', 'localhost')
app.config['MYSQL_USER'] = os.getenv('MYSQL_USER', 'root')
app.config['MYSQL_PASSWORD'] = os.getenv('MYSQL_PASSWORD', '')
app.config['MYSQL_DB'] = os.getenv('MYSQL_DB', 'student_db')

mysql = MySQL(app)