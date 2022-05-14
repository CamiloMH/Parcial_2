const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Tipo_medicamento = sequelize.define('Tipo_medicamento', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'tipo_medicamentos'
})

module.exports = Tipo_medicamento
