// utilities/sql.js
const mysql = require('mysql2');

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Abhi@211724',
    database:'testingdb'
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }
    console.log('Connected to MySQL database');
    
    // Create students table if it doesn't exist
    const createTableQuery = ` 
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            age INT NOT NULL
        )
    `;
    
    // Correct method: db.query() 
    db.query(createTableQuery, (err) => {
        if (err) {
            console.error('Error creating table:', err.message);
            return;
        }
        console.log('Students table created or already exists.');
    });
});

module.exports = db;
