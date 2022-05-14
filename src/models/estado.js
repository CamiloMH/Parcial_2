const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Estado = sequelize.define('Estado', {
  descripcion: {
    type: DataTypes.STRING(70),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'estados'
})

module.exports = Estado
