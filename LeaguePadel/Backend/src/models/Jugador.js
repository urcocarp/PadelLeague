const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');



const Jugador = sequelize.define('Jugador', {
    id:{
     type:DataTypes.NUMBER,
     allowNull:false,
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    LastName:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    DNI:{
        type:DataTypes.STRING, 
        // unique: ,
        allowNull:false,
        
    }


})

module.exports= Jugador;