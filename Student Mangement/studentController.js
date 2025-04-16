// controllers/studentController.js
const db = require('../utilities/sql');

// Add a new student
const addStudent = (req, res) => {
    const { name, email, age } = req.body;
    const insertQuery = 'INSERT INTO students (name, email, age) VALUES (?, ?, ?)';

    db.execute(insertQuery, [name, email, age], (err, results) => {
        if (err) {
            console.error('Error inserting student:', err.message);
            return res.status(500).send('Error inserting student');
        }
        console.log('Student added:', { name, email, age });
        res.status(200).send('Student added successfully');
    });
};

// Get all students
const getAllStudents = (req, res) => {
    const selectQuery = 'SELECT * FROM students';

    db.execute(selectQuery, (err, results) => {
        if (err) {
            console.error('Error fetching students:', err.message);
            return res.status(500).send('Error fetching students');
        }
        res.status(200).json(results);
    });
};

// Get student by ID
const getStudentById = (req, res) => {
    const { id } = req.params;
    const selectQuery = 'SELECT * FROM students WHERE id = ?';

    db.execute(selectQuery, [id], (err, results) => {
        if (err) {
            console.error('Error fetching student:', err.message);
            return res.status(500).send('Error fetching student');
        }
        if (results.length === 0) {
            return res.status(404).send('Student not found');
        }
        res.status(200).json(results[0]);
    });
};

// Update student by ID
const updateStudent = (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const updateQuery = 'UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?';

    db.execute(updateQuery, [name, email, age, id], (err, results) => {
        if (err) {
            console.error('Error updating student:', err.message);
            return res.status(500).send('Error updating student');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }
        console.log('Student updated:', { id, name, email, age });
        res.status(200).send('Student updated successfully');
    });
};

// Delete student by ID
const deleteStudent = (req, res) => {
    const { id } = req.params;
    const deleteQuery = 'DELETE FROM students WHERE id = ?';

    db.execute(deleteQuery, [id], (err, results) => {
        if (err) {
            console.error('Error deleting student:', err.message);
            return res.status(500).send('Error deleting student');
        }
        if (results.affectedRows === 0) {
            return res.status(404).send('Student not found');
        }
        console.log('Student deleted:', { id });
        res.status(200).send('Student deleted successfully');
    });
};

module.exports = {
    addStudent,
    getAllStudents,
    getStudentById,
    updateStudent,
    deleteStudent
};
