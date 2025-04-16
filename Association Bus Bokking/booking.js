const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../utilities/sql');

const Booking = sequelize.define('Booking', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    seatNumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Booking;
