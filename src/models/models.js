const Paciente = require('./pacientes')
const Medico = require('./medicos')
const Ficha = require('./fichas')
const Medicamento = require('./medicamentos')

Medico.hasMany(Ficha, { foreignKey:{
    allowNull: false
}})

Paciente.hasOne(Ficha, { foreignKey: {
    allowNull: false
  },
   onDelete: 'CASCADE' })

Ficha.belongsTo(Paciente , { foreignKey: {
    allowNull: false
  }})

Ficha.belongsTo(Medico, { foreignKey: {
    allowNull: false
}})

module.exports = {
    models:{
        Paciente,
        Medico,
        Ficha,
        Medicamento
    }
}