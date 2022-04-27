const Paciente = require("../models/pacientes")


const getAllPaciente =  async (req,res) => {
    try {
        const pacientes = await Paciente.findAll()
        res.status(200).json(pacientes)
    } catch (error) {
        res.status(400).json(error)
    }
}

const obtenerPaciente = async (req,res) => {
    try {
        const { pacienteId } = req.params
        const paciente = await Paciente.findByPk(pacienteId)
        res.status(200).json(paciente ? paciente : {})
    } catch (error) {
        res.status(400).json(error)
    }
}

const crearPaciente = async (req,res) =>{
    try {
        const { rut, nombre, apellido } = req.body
        const paciente = {
            rut,
            nombre,
            apellido,
            createdDate: new Date(),
        }
        await Paciente.create(paciente)
        res.status(201).json({Status: 'Paciente creado'})
    } catch (error) {
        res.status(400).json(error)
    }
}

const actualizarPaciente = async (req,res) => {
    try {
        const { pacienteId } = req.params
        const { rut, nombre, apellido } = req.body
        const paciente = {
            rut,
            nombre,
            apellido,
            lastModifiedDate: new Date()
        }
        await Paciente.update(paciente,{
            where:{
                id: pacienteId
            }
        })

        res.status(200).json({Status: 'Paciente actualizado'})
    } catch (error) {
        res.status(400).json(error)
    }
}

const deletePaciente = async (req,res) => {
    try {
        const { pacienteId } = req.params
        await Paciente.destroy({
            where: {
                id: pacienteId
            }
        })
        res.status(200).json({Status: 'Paciente eliminado'})
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllPaciente,
    obtenerPaciente,
    crearPaciente,
    deletePaciente,
    actualizarPaciente
}