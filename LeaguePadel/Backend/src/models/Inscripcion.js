const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');





const Inscripcion = sequelize.define('Inscripcion', {

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
      },
    estadoPago: {
      type: DataTypes.ENUM('pendiente', 'pagado'),
      allowNull: false,
      defaultValue: 'pendiente'
    },
    monto: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false
    },
    
  });

  module.exports= Inscripcion;