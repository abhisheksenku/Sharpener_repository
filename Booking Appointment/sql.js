const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('testingdb', 'root', 'Abhi@211724', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
