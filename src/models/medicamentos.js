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
  fabricante: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  gramaje: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  estado: DataTypes.STRING(30),
  caducado: {
    type: DataTypes.TINYINT(1),
    defaultValue: 0
  },
  motivo: DataTypes.TEXT('long'),
  descripcion: DataTypes.TEXT('long'),
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE,
}, {
  timestamps: false,
  tableName: 'medicamentos'
})

module.exports = Medicamento
