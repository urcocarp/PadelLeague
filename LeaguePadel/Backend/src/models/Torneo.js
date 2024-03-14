const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Torneo= sequelize.define('Torneo', {
  id:{
    type:DataTypes.NUMBER,
    allowNull:false,
  },
  Name:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  Modo:{
    type:DataTypes.ENUM('Todos contra todos', 'Zonas'),
    allowNull:false,
  },
  Prize:{
    type:DataTypes.STRING,
    allowNull:false,
  },


})
module.exports= Torneo;