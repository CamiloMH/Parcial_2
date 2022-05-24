const sequelize = require('sequelize')
const Paciente = require('../models/pacientes')
const { Op } = require('sequelize')
const { verificarRut } = require('../helpers/verificarRut')

const obtenerPacientes = async (req, res) => {
  try {
    const pacientes = await Paciente.findAll({
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
          [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
        ],
        exclude: ['createdDate', 'lastModifiedDate']
      }
    })
    res.status(200).json(pacientes)
  } catch (error) {
    res.status(400).json(error)
  }
}

const obtenerPacienteById = async (req, res) => {
  try {
    const { pacienteId } = req.params
    const paciente = await Paciente.findOne({
      where: {
        id: pacienteId
      }
    })
    res.status(200).json(paciente || {})
  } catch (error) {
    res.status(400).json(error)
  }
}

const obtenerPacienteByRut = async (req, res) => {
  try {
    const { rut } = req.params
    const { rutValido, rutFormat } = verificarRut(rut)
    if (!rutValido) return res.status(400).json({ Error: 'Rut invalido' })
    
    
    const arrayRut = rutFormat.split('-',-1)
    const rutParse = parseInt(arrayRut[0])

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

const crearPaciente = async (req, res) => {
  try {
    const { rut, dv,  nombre, apellidos, edad, correo, celular } = req.body
    const rutDv = `${rut}-${dv}`
    const { rutValido, rutFormat } = verificarRut(rutDv)
    if (!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

    const getPaciente = await Paciente.count({ // Select count(*) from pacientes
      where: {
        rut
      }
    })

    if (getPaciente > 0) return res.status(403).json({ Error: 'Ya existe un paciente con ese RUT' })

    console.log(typeof edad);

    const paciente = {
      rut,
      dv,
      nombre,
      apellidos,
      edad,
      correo,
      celular,
      isDisabled: 0,
      createdDate: new Date()
    }
    await Paciente.create(paciente)
    res.status(201).json({ Status: 'Paciente creado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const actualizarPaciente = async (req, res) => {
  try {
    const { pacienteId } = req.params
    const { nombre, apellidos, edad, correo, celular} = req.body
  
    const paciente = {
      nombre,
      apellidos,
      edad,
      correo,
      celular,
      lastModifiedDate: new Date()
    }
    await Paciente.update(paciente, {
      where: {
        id: pacienteId
      }
    })

    res.status(200).json({ Status: 'Paciente actualizado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const disabledPaciente = async (req,res) => {
  try {
    const { pacienteId } = req.params
    const { isDisabled } = req.body

    const getPaciente = await Paciente.count({ // Select count(*) from pacientes
      where: {
        id: pacienteId
      }
    })

    if(getPaciente === 0) return res.status(403).json({Status:"El paciente no existe"})
    await Paciente.update({isDisabled}, {
      where: {
        id: pacienteId
      }
    })

    isDisabled === 1 ? res.status(200).json({ Status: 'Paciente Habilitado' }) : res.status(200).json({ Status: 'Paciente deshabilitado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const deletePaciente = async (req, res) => {
  try {
    const { pacienteId } = req.params

    const getPaciente = await Paciente.count({ // Select count(*) from pacientes
      where: {
        id: pacienteId
      }
    })

    if(getPaciente === 0) return res.status(403).json({Status:"El paciente no existe"})

    await Paciente.destroy({
      where: {
        id: pacienteId
      }
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
  crearPaciente,
  actualizarPaciente,
  disabledPaciente,
  deletePaciente
}
