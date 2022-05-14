const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Especialidad = sequelize.define('Especialidad', {
  nombre: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'especialidades'
})

module.exports = Especialidad
