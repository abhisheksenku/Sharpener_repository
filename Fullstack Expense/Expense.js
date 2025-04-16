// models/Expense.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/sql');

const Expense = sequelize.define('Expense', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    amount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    date: {
        type: DataTypes.DATE,
        defaultValue: Sequelize.NOW
    }
});

module.exports = Expense;
