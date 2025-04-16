const Booking = require('../models/booking');
const User = require('../models/user');
const Bus = require('../models/bus');

const createBooking = async (req, res) => {
    try {
        const { userId, busId, seatNumber } = req.body;
        const user = await User.findByPk(userId);
        const bus = await Bus.findByPk(busId);

        if (!user || !bus) {
            return res.status(404).send("User or Bus not found");
        }

        const booking = await Booking.create({ userId, busId, seatNumber });
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookingsForUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const bookings = await User.findByPk(userId, {
            include: {
                model: Booking,
                include: Bus // Include Bus details along with the booking
            }
        });
        res.status(200).json(bookings.Bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getBookingsForBus = async (req, res) => {
    try {
        const busId = req.params.id;
        const bookings = await Bus.findByPk(busId, {
            include: {
                model: Booking,
                include: User // Include User details along with the booking
            }
        });
        res.status(200).json(bookings.Bookings);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { createBooking, getBookingsForUser, getBookingsForBus };
