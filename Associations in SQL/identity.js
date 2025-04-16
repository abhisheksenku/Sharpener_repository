const {Sequelize,DataTypes} = require('sequelize');
const sequelize = require('../utilities/sql');

const Identity = sequelize.define('identity',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        allowNull:true
    },
    cardNo:{
        type:DataTypes.INTEGER,
        unique:true,
        allowNull:false
    }
})
module.exports = Identity;