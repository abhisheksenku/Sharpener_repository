// controllers/expenseController.js
const Expense = require('../models/Expense');

// Controller to get all expenses
const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json(expenses);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to create a new expense
const createExpense = async (req, res) => {
    try {
        const { amount, description, date } = req.body;
        const expense = await Expense.create({ amount, description, date });
        res.status(201).json(expense);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Controller to delete an expense
const deleteExpense = async (req, res) => {
    try {
        const { id } = req.params;
        const expense = await Expense.destroy({
            where: { id }
        });
        if (!expense) {
            res.status(404).json({ message: 'Expense not found' });
            return;
        }
        res.status(200).json({ message: 'Expense deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getExpenses,
    createExpense,
    deleteExpense
};
