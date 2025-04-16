const express = require('express');
const userController = require('../controller/userController');
const router = express.Router();
router.get('/get', userController.getEntries);
router.post('/add',userController.addEntries);

module.exports= router;