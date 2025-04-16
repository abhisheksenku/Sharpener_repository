const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utilities/sql'); 

const courses = sequelize.define('course',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    }
})
module.exports = courses;