const { DataTypes } = require('sequelize');
const sequelize = require('../database');

const Horario = sequelize.define('Horario', {
  dia: {
    type: DataTypes.STRING,
    allowNull: false
  },
  horaInicio: {
    type: DataTypes.TIME,
    allowNull: false
  },
  horaFin: {
    type: DataTypes.TIME,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  }
});

module.exports = Horario;
