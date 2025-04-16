const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();
router.get('/get', busController.getEntries);
router.get('/available/:seats', busController.getAvailableBuses);

module.exports= router;