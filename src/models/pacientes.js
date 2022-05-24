const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Paciente = sequelize.define('Paciente', {
  rut: {
    type: DataTypes.INTEGER(8),
    allowNull: false
  },
  dv: {
    type: DataTypes.STRING(1),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellidos: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  edad: {
    type: DataTypes.STRING(3),
    allowNull: false
  },
  correo: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  celular: {
    type: DataTypes.INTEGER(9),
    allowNull: false
  },
  isDisabled: DataTypes.TINYINT,
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'pacientes'
})

module.exports = Paciente
