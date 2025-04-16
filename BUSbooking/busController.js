const db = require('../utilities/sql');

const addEntries = (req, res) => {
    const { busName, totalSeats, availableSeats } = req.body;
    const insertQuery = 'INSERT INTO buses (busName, totalSeats, availableSeats) VALUES (?, ?, ?)';

    db.execute(insertQuery, [busName, totalSeats, availableSeats], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(`Bus ${busName} added successfully`);
    });
};

const getAvailableBuses = (req, res) => {
    const { seats } = req.params;
    const selectQuery = 'SELECT * FROM buses WHERE availableSeats > ?';

    db.execute(selectQuery, [seats], (err, results) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).json(results);
    });
};

module.exports = {
    addEntries,
    getAvailableBuses
};
