const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utilities/sql');

const department = sequelize.define("departments",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER,
        autoIncrement:true
    },
    name:{
        type:DataTypes.STRING
    }
})
module.exports = department;