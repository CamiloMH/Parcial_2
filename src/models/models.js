const Paciente = require('./pacientes')
const Medico = require('./medicos')
const Ficha = require('./fichas')

Medico.hasMany(Ficha, {foreignKey: 'medicoId'})
Paciente.hasOne(Ficha, {foreignKey: 'pacienteId'})

module.exports = {
    models:{
        Paciente,
        Medico,
        Ficha
    }
}