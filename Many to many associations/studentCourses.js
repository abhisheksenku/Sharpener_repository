const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utilities/sql');

const studentCourses = sequelize.define('studentCourses',{
    id:{
        primaryKey:true,
        autoIncrement:true,
        type:DataTypes.INTEGER
    }
});
module.exports = studentCourses;