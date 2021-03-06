const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Ficha = sequelize.define('Ficha', {
  observaciones: DataTypes.TEXT('long'),
  isDisabled: DataTypes.TINYINT,
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'fichas'
})

module.exports = Ficha
