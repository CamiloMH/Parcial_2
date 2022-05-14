const Paciente = require('./pacientes')
const Medico = require('./medicos')
const Ficha = require('./fichas')
const Medicamento = require('./medicamentos')
const Especialidad = require('./especialidad')
const Reserva = require('./reserva')
const Tipo_medicamento = require('./tipo_medicamento')
const Caducidad = require('./caducidad')
const Funcionario = require('./funcionario')
const Receta = require('./recetas')

//-------------------------------------------------
// Medico tiene muchas fichas y ficha solo un Medico
Medico.hasMany(Ficha, {
  foreignKey: {
    allowNull: false
  }
})

Ficha.belongsTo(Medico, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Paciente tiene una ficha y ficha solo tiene un paciente
Paciente.hasOne(Ficha, {
  foreignKey: {
    allowNull: false
  },
  onDelete: 'CASCADE'
})

Ficha.belongsTo(Paciente, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Especialidad tiene muchos medicos y medico tiene una especialidad
Especialidad.hasMany(Medico, {
  foreignKey: {
    allowNull: false
  }
})


Medico.belongsTo(Especialidad, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Reserva tiene muchos medicamentos y medicamento solo tiene un Reserva
Reserva.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Reserva, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Tipo medicamento tiene muchos medicamentos y medicamento solo tiene un tipo
Tipo_medicamento.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Tipo_medicamento, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Caducidad tiene muchos medicamentos y medicamento solo una caducidad
Caducidad.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Caducidad, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Funcionarios tiene muchos medicamentos y medicamentos tiene solo un fucionario
Funcionario.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Funcionario, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Medicamentos tiene muchas recetas
Medicamento.hasMany(Receta, {
  foreignKey: {
    allowNull: false
  }
})

Receta.belongsTo(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

//-------------------------------------------------
//Fichas tiene muchas recetas 
Ficha.hasMany(Receta, {
  foreignKey: {
    allowNull: false
  }
})

Receta.belongsTo(Ficha, {
  foreignKey: {
    allowNull: false
  }
})
//-------------------------------------------------

module.exports = {
  models: {
    Paciente,
    Medico,
    Ficha,
    Medicamento,
    Especialidad,
    Reserva,
    Tipo_medicamento,
    Caducidad,
    Funcionario,
    Receta
  }
}
