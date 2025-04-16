const express = require('express');
const busController = require('../controller/busController');
const router = express.Router();

router.post('/', busController.createBus);

module.exports = router;
