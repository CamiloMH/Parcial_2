const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Reserva = sequelize.define('Reserva', {
  descripcion: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'reserva'
})

module.exports = Reserva
