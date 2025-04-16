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

    // Create users table
    const createUsersTable = `
        CREATE TABLE IF NOT EXISTS users (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL
        )
    `;
    db.query(createUsersTable, (err) => {
        if (err) {
            console.error('Error creating users table:', err.message);
        } else {
            console.log('Users table ensured.');
        }
    });

    // Create buses table
    const createBusesTable = `
        CREATE TABLE IF NOT EXISTS buses (
            id INT AUTO_INCREMENT PRIMARY KEY,
            busName VARCHAR(100) NOT NULL,
            totalSeats INT NOT NULL,
            availableSeats INT NOT NULL
        )
    `;
    db.query(createBusesTable, (err) => {
        if (err) {
            console.error('Error creating buses table:', err.message);
        } else {
            console.log('Buses table ensured.');
        }
    });
});

module.exports = db;
