// routes/studentRoutes.js
const express = require('express');
const studentController = require('../controllers/studentController');
const router = express.Router();

router.post('/', studentController.addStudent); // POST /students
router.get('/', studentController.getAllStudents); // GET /students
router.get('/:id', studentController.getStudentById); // GET /students/:id
router.put('/:id', studentController.updateStudent); // PUT /students/:id
router.delete('/:id', studentController.deleteStudent); // DELETE /students/:id

module.exports = router;
