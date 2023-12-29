const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const PORT = process.env.PORT || 5001;

// ... rest of your code

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'your_username', // replace with your MySQL username
  password: 'your_password', // replace with your MySQL password
  database: 'fitness_db' // replace with your database name
});

db.connect(err => {
  if (err) throw err;
  console.log('MySQL connected...');
});

// API Endpoint to handle POST requests for new workouts
app.post('/api/workouts', (req, res) => {
  const query = 'INSERT INTO workouts SET ?';
  db.query(query, req.body, (err, result) => {
    if (err) throw err;
    res.send('Workout added successfully');
  });
});