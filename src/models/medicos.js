const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Medico = sequelize.define('Medico', {
  rut: {
    type: DataTypes.STRING(12),
    allowNull: false
  },
  dv: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  edad: DataTypes.INTEGER(3),
  isDisabled: DataTypes.TINYINT,
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'medicos'
})

module.exports = Medico
