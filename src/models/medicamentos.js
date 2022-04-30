const { DataTypes } = require('sequelize')
const { sequelizeFarmacia } = require('../db/database')

const Medicamento = sequelizeFarmacia.define('Medicamento', {
  nombre: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER(5),
    allowNull: false
  },
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE,
}, {
  timestamps: false,
  tableName: 'medicamentos'
})

module.exports = Medicamento
