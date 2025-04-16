const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/sql');

const Bus = sequelize.define('Bus', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    busNumber: {
        type: DataTypes.STRING,
        allowNull: false
    },
    totalSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    availableSeats: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Bus;
