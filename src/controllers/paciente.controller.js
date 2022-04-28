const sequelize = require("sequelize")
const Paciente = require("../models/pacientes")
const { Op } = require('sequelize')
const { verificarRut } = require("../helpers/verificarRut")

const getAllPaciente =  async (req,res) => {
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

const obtenerPaciente = async (req,res) => {
    try {
        const { rut } = req.params
        const { rutValido, rutFormat } = verificarRut(rut)
        if(!rutValido) return res.status(400).json({ Error: 'Rut invalido' })
        const paciente = await Paciente.findOne({
            where:{
                rut: rutFormat
            }
        })
        res.status(200).json(paciente ? paciente : {})
    } catch (error) {
        res.status(400).json(error)
    }
}

const crearPaciente = async (req,res) =>{
    try {
        const { rut, nombre, apellido } = req.body
        const { rutValido, rutFormat } = verificarRut(rut)
        if(!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

        const getPaciente = await Paciente.count({
            where:{
                rut: rutFormat
            }
        })

        if(getPaciente > 0) return res.status(403).json({ Error: 'Ya existe un paciente con ese RUT'})

        const paciente = {
            rut: rutFormat,
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
        const { rutValido, rutFormat } = verificarRut(rut)
        if(!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

        const getPaciente = await Paciente.count({
            where:{
                rut: rutFormat,
                id : {
                    [Op.ne]: pacienteId
                }
            }
        })

        if(getPaciente > 0) return res.status(403).json({ Error: 'Ya existe un paciente con ese RUT'})

        const paciente = {
            rut: rutFormat,
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