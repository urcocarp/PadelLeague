const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Admin= sequelize.define('Admin', {
    Id: {
      type: DataTypes.NUMBER,//garden
      primaryKey:true,
      allowNull: false,
    },
    Name: {
      type: DataTypes.STRING,//02/03
      allowNull: false
    },
    LastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Email:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    Password:{
      type: DataTypes.STRING,
      allowNull:false,//sexta
    },
    NumberPhone:{
      type:DataTypes.NUMBER,
      allowNull:false
    },
    Clients:{
      type:DataTypes.ARRAY,
      allowNull:false,
    }
       //svx1y?21
   })

    module.exports= Admin;