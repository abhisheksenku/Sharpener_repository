const db = require('../utilities/sql');

const addEntries = (req, res) => {
    const { name, email } = req.body;
    const insertQuery = 'INSERT INTO users (name, email) VALUES (?, ?)';

    db.execute(insertQuery, [name, email], (err) => {
        if (err) {
            console.error(err.message);
            res.status(500).send(err.message);
            return;
        }
        res.status(200).send(`User ${name} added successfully`);
    });
};

const getEntries = (req, res) => {
    const selectQuery = 'SELECT * FROM users';

    db.execute(selectQuery, (err, results) => {
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
    getEntries
};
