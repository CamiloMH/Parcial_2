const { DataTypes } = require('sequelize')
const { sequelize } = require('../db/database')

const Funcionario = sequelize.define('Funcionario', {
  rut: {
    type: DataTypes.INTEGER(8),
    allowNull: false
  },
  dv: {
    type: DataTypes.STRING,
    allowNull: false
  },
  nombre: DataTypes.STRING(50),
  edad: DataTypes.INTEGER(3),
  isDisabled: DataTypes.TINYINT,
  createdDate: DataTypes.DATE,
  lastModifiedDate: DataTypes.DATE
}, {
  timestamps: false,
  tableName: 'funcionarios'
})

module.exports = Funcionario
