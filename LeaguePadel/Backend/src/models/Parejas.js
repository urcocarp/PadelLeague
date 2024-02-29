const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');


const Pareja = sequelize.define('Pareja', {
    nombreJugador1: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nombreJugador2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    categoria:{
        type: DataTypes.ENUM('octava', 'septima', 'sexta', 'quinta', 'cuarta', 'tercera', 'segunda', 'primera', 'elite'),
        allowNull: false
    }
    
  });
  module.exports =Pareja;