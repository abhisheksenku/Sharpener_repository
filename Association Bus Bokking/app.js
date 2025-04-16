const express = require('express');
const db = require('./utilities/sql');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const bookingRoutes = require('./routes/bookingRoutes');

require('./models'); // Set up associations

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Welcome to the Booking System');
});

// Routes
app.use('/users', userRoutes);
app.use('/buses', busRoutes);
app.use('/bookings', bookingRoutes);

db.sync({ force: false }).then(() => {
    app.listen(3000, () => {
        console.log('Server running on http://localhost:3000');
    });
}).catch((err) => {
    console.log(err);
});
