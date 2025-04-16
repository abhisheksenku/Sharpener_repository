const express = require('express');
const mysql = require('mysql2');
const app = express();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Abhi@211724',
    database: 'testingdb'
});

connection.connect((err) => {
    if (err) {
        console.error('Connection failed:', err);
        return;
    }
    console.log("Connected to MySQL");

    const createUsersTable = `CREATE TABLE IF NOT EXISTS Users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(20),
        email VARCHAR(20)
    )`;

    const createBusesTable = `CREATE TABLE IF NOT EXISTS Buses (
        id INT AUTO_INCREMENT PRIMARY KEY,
        busNumber VARCHAR(50) NOT NULL,
        totalSeats INT NOT NULL,
        availableSeats INT NOT NULL
    )`;

    const createBookingsTable = `CREATE TABLE IF NOT EXISTS Bookings (
        id INT AUTO_INCREMENT PRIMARY KEY,
        seatNumber INT NOT NULL
    )`;
    const createPaymentsTable = `CREATE TABLE IF NOT EXISTS Payments(
        id INT PRIMARY KEY,
        amountpaid DECIMAL(10,2) NOT NULL,
        paymentStatus VARCHAR(20) NOT NULL  
    )`;

    connection.execute(createUsersTable, (err) => {
        if (err) {
            console.error('Error creating Users:', err);
            return;
        }
        console.log("Users table created");

        connection.execute(createBusesTable, (err) => {
            if (err) {
                console.error('Error creating Buses:', err);
                return;
            }
            console.log("Buses table created");

            connection.execute(createBookingsTable, (err) => {
                if (err) {
                    console.error('Error creating Bookings:', err);
                    return;
                }
                console.log("Bookings table created");

                connection.execute(createPaymentsTable,(err)=>{
                    if(err){
                        console.log("Error while creating Payments table",err);
                        return;
                    }
                    console.log("Payments table is created");
                });
            });
        });
    });
});

// Basic route
app.get('/', (req, res) => {
    res.send("API working");
});

app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
