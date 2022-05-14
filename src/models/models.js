const Paciente = require('./pacientes')
const Medico = require('./medicos')
const Ficha = require('./fichas')
const Medicamento = require('./medicamentos')
const Especialidad = require('./especialidad')
const Estado = require('./estado')
const Tipo_medicamento = require('./tipo_medicamento')
const Caducidad = require('./caducidad')
const Funcionario = require('./funcionario')

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
//Estado tiene muchos medicamentos y medicamento solo tiene un estado
Estado.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Estado, {
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
//Ficha tiene muchos medicamentos y medicamentos tiene solo una ficha
Ficha.hasMany(Medicamento, {
  foreignKey: {
    allowNull: false
  }
})

Medicamento.belongsTo(Ficha, {
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
    Estado,
    Tipo_medicamento,
    Caducidad,
    Funcionario
  }
}
