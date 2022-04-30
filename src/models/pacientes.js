const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Paciente = sequelize.define('Paciente', {
  rut: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: DataTypes.STRING(50),
  apellido: DataTypes.STRING(50),
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'pacientes'
})

module.exports = Paciente
