const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Categoria = sequelize.define('Pareja', {
 
  id:{
    type: DataTypes.NUMBER,
    allowNull:false,
    primaryKey:true,
  },
Name:{
  type:DataTypes.STRING,
  allowNull:false
},

    
  });
  module.exports =Categoria;