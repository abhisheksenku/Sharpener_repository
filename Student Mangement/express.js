// express.js
const express = require('express');
const studentRoutes = require('./routes/studentRoutes');
const app = express();

app.use(express.json()); // Middleware for parsing JSON requests
app.use('/students', studentRoutes); // Set up student routes

app.get('/', (req, res) => {
    res.send('Welcome to the Students API!');
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
