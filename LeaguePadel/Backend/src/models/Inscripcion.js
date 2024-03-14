const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Inscripcion = sequelize.define('Inscripcion', {
    Id:{
    type:DataTypes.NUMBER,
    primaryKey:true,
    allowNull:false
      },

     Player1: {
        type: DataTypes.STRING,
        allowNull: false
      },
    Player2: {
        type: DataTypes.STRING,
        allowNull: false
      },
  
    Pay: {
      type: DataTypes.ENUM('pendiente', 'pagado'),
      allowNull: false,
      defaultValue: 'pendiente'
    },
    Amount: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    
  });
      //sxta=[{}]
  module.exports= Inscripcion;