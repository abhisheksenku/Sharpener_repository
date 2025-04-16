const Bus = require('../models/bus');

const createBus = async (req, res) => {
    try {
        const { busNumber, totalSeats, availableSeats } = req.body;
        const bus = await Bus.create({ busNumber, totalSeats, availableSeats });
        res.status(201).json(bus);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createBus };
