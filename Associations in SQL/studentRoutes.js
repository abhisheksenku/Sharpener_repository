const express = require('express');
const studentController = require('../controller/StudentController');
const router = express.Router();
router.get('/get', studentController.getEntries);
router.post('/add',studentController.addEntries);
router.put('/update/:id',studentController.updateEntry);
router.delete('/delete/:id',studentController.deleteEntry);
router.post('/addingStudentsWithIDCard',studentController.addingValuesToStudentAndIdentityTable);
module.exports= router;