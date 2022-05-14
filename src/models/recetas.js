const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Receta = sequelize.define('Receta', {
  descripcion: {
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  estado: DataTypes.TINYINT,
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'recetas'
})

module.exports = Receta
