const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Caducidad = sequelize.define('Caducidad', {
  motivo: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'caducidad'
})

module.exports = Caducidad
