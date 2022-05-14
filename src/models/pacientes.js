const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Paciente = sequelize.define('Paciente', {
  rut: {
    type: DataTypes.INTEGER(8),
    allowNull: false
  },
  dv: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: DataTypes.STRING(50),
  edad: DataTypes.INTEGER(3),
  isDisabled: DataTypes.TINYINT,
  correo: DataTypes.STRING(50),
  celular: DataTypes.INTEGER(9),
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'pacientes'
})

module.exports = Paciente
