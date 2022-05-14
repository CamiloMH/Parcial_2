const sequelize = require('sequelize')
const Ficha = require('../models/fichas')
const Paciente = require('../models/pacientes')
const { verificarRut } = require('../helpers/verificarRut')
const Medico = require('../models/medicos')

const getAllFichas = async (req, res) => {
  try {
    const fichas = Ficha.findAll({
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
          [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
        ],
        exclude: ['createdDate', 'lastModifiedDate']
      }
    })
    res.status(200).json(fichas)
  } catch (error) {
    res.status(400).json(error)
  }
}
const getFichaByRutPaciente = async (req, res) => {
  try {
    const { pacienteRUT } = req.params
    const { rutValido, rutFormat } = verificarRut(pacienteRUT)
    if (!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

    const paciente = await Paciente.findOne({
      where: {
        rut: rutFormat
      }
    })
    const ficha = await paciente.getFicha()
    res.status(200).json(ficha)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createFicha = async (req, res) => {
  try {
    const { rutMedico, rutPaciente, observaciones = null } = req.body

    const { rutValido: rutPacienteValido, rutFormat: rutFormatPaciente } = verificarRut(rutPaciente)
    const { rutValido: rutMedicoValido, rutFormat: rutFormatMedico } = verificarRut(rutMedico)

    if (!rutPacienteValido) return res.status(400).json({ Error: 'Rut de Paciente invalido' })
    if (!rutMedicoValido) return res.status(400).json({ Error: 'Rut de Médico invalido' })

    const paciente = await Paciente.findOne({
      where: {
        rut: rutFormatPaciente
      }
    })

    if (!paciente) return res.status(400).json({ Error: 'No existe un Paciente con ese RUT' })

    const medico = await Medico.findOne({
      where: {
        rut: rutFormatMedico
      }
    })

    if (!medico) return res.status(400).json({ Error: 'No existe un Médico con ese RUT' })

    const getFicha = await Ficha.count({
      where: {
        PacienteId: paciente.dataValues.id
      }
    })

    if (getFicha > 0) return res.status(400).json({ Error: 'El Paciente ya tiene una Ficha creada' })

    const ficha = {
      MedicoId: medico.dataValues.id,
      PacienteId: paciente.dataValues.id,
      observaciones,
      createdDate: new Date()
    }
    try {
      await Ficha.upsert(ficha)
    } catch (error) {
      console.log(error)
    }

    res.status(201).json({ Status: 'Ficha creada' })
  } catch (error) {
    res.status(400).json(error)
  }
}
const updateFicha = async (req, res) => {
  try {
    const { fichaId } = req.params
    const { observaciones = null } = req.body
    const ficha = {
      observaciones,
      lastModifiedDate: new Date()
    }

    const result = await Ficha.update(ficha, {
      where: {
        id: fichaId
      }
    })
    result[0] === 0 ? res.status(400).json({ Error: 'La Ficha no existe' }) : res.status(200).json({ Status: 'Ficha actualizada' })
  } catch (error) {
    res.status(400).json(error)
  }
}
const deleteFicha = async (req, res) => {
  try {
    const { fichaId } = req.params
    const result = await Ficha.destroy({
      where: {
        id: fichaId
      }
    })
    result === 0 ? res.status(404).json({ Error: 'La ficha no existe' }) : res.status(200).json({ Status: 'Ficha eliminada' })
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllFichas,
  getFichaByRutPaciente,
  createFicha,
  updateFicha,
  deleteFicha
}
