// routes/expenseRoutes.js
const express = require('express');
const expenseController = require('../controllers/expenseController');
const router = express.Router();

// Route for getting all expenses
router.get('/', expenseController.getExpenses);

// Route for creating an expense
router.post('/add', expenseController.createExpense);

// Route for deleting an expense
router.delete('/delete/:id', expenseController.deleteExpense);

module.exports = router;
