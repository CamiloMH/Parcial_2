const Paciente = require('../models/pacientes')
const { verificarRut } = require('../helpers/verificarRut')

const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll()
    res.status(200).json(pacientes)
  } catch (error) {
    res.status(400).json(error)
  }
}

const obtenerPacienteById = async (req, res) => {
  try {
    const { id } = req.params
    const paciente = await Paciente.findOne({
      where: {
        id
      }
    })
    res.status(200).json(paciente)
  } catch (error) {
    res.status(400).json(error)
  }
}

const obtenerPacienteByRut = async (req, res) => {
  try {
    const { rut } = req.params
    const { rutFormat } = verificarRut(rut)
    const arrayRut = rutFormat.split('-').shift()
    const rutParse = parseInt(arrayRut)

    const paciente = await Paciente.findOne({
      where: {
        rut: rutParse
      }
    })
    res.status(200).json(paciente || {})
  } catch (error) {
    res.status(400).json(error)
  }
}

const restorePaciente = async (req, res) => {
  try {
    const { id } = req.params
    await Paciente.restore({
      where: {
        id
      }
    })
    res.status(200).json({ Status: 'Paciente restaurado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const restorePacientes = async (req, res) => {
  try {
    await Paciente.restore()
    res.status(200).json({ Status: 'Pacientes restaurados' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const crearPaciente = async (req, res) => {
  try {
    const { rut, dv,  nombre, apellidos, edad, correo, celular } = req.body

    const paciente = {
      rut,
      dv,
      nombre,
      apellidos,
      edad,
      correo,
      celular,
    }
    await Paciente.create(paciente)
    res.status(201).json({ Status: 'Paciente creado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const actualizarPaciente = async (req, res) => {
  try {
    const { id } = req.params
    const { nombre, apellidos, edad, correo, celular} = req.body
  
    const paciente = {
      nombre,
      apellidos,
      edad,
      correo,
      celular,
    }
    await Paciente.update(paciente, {
      where: {
        id
      }
    })

    res.status(200).json({ Status: 'Paciente actualizado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const softDeletePaciente = async (req,res) => {
  try {
    const { id } = req.params

    await Paciente.destroy({
      where: {
        id
      }
    })
    res.status(200).json({ Status: 'Paciente eliminado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const deletePaciente = async (req, res) => {
  try {
    const { id } = req.params

    await Paciente.destroy({
      where: {
        id
      },
      force: true
    })
    res.status(200).json({ Status: 'Paciente eliminado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  obtenerPacientes,
  obtenerPacienteById,
  obtenerPacienteByRut,
  restorePaciente,
  restorePacientes,
  crearPaciente,
  actualizarPaciente,
  softDeletePaciente,
  deletePaciente
}
