const express = require('express');
const bookingController = require('../controller/bookingController');
const router = express.Router();

router.post('/', bookingController.createBooking);
router.get('/users/:id/bookings', bookingController.getBookingsForUser);
router.get('/buses/:id/bookings', bookingController.getBookingsForBus);

module.exports = router;
