const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');




const Torneo = sequelize.define('Torneo', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: false
    },
    formato: {
      type: DataTypes.ENUM('todos_contra_todos', 'Zonas'),
      allowNull: false
    },
    codigo: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }})

    module.exports= Torneo