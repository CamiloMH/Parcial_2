const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Medico = sequelize.define('Medico', {
  rut: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  apellido: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  especialidad: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'medicos'
})

module.exports = Medico
