const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Ficha = sequelize.define('Ficha', {
  // medicoId: {
  //   type: DataTypes.INTEGER(11),
  //   allowNull: false
  // },
  // pacienteId: {
  //   type: DataTypes.INTEGER(11),
  //   allowNull: false
  // },
  observaciones: DataTypes.TEXT('long'),
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE,
}, {
  timestamps: false,
  tableName: 'fichas'
})

module.exports = Ficha
