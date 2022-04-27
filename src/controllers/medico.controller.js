const sequelize = require("sequelize")
const { verificarRut } = require("../helpers/verificarRut")
const Medico = require("../models/medicos")


const getAllMedics = async (req,res) => {
    try {
        const medicos = await Medico.findAll({
            attributes: {
                include: [
                  [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
                  [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
                ],
                exclude: ['createdDate', 'lastModifiedDate']
              }
        })
        res.status(200).json(medicos)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getMedicById = async (req,res) => {
    try {
        const { medicoId } = req.params
        const medico = await Medico.findByPk(medicoId)
        res.status(200).json(medico ? medico : {})
    } catch (error) {
        res.status(400).json(error)
    }
}

const createMedic = async (req,res) => {
    try {
        const { rut, nombre, apellido, especialidad } = req.body

        const { rutValido, rutFormat } = verificarRut(rut)
        if(!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

        const medico = {
            rut: rutFormat,
            nombre,
            apellido,
            especialidad,
            createdDate: new Date()
        }
        await Medico.create(medico)
        res.status(201).json({Status: 'Médico creado'})
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateMedic = async (req,res) => {
    try {
        const { medicoId } = req.params
        const { rut, nombre, apellido, especialidad } = req.body

        const { rutValido, rutFormat } = verificarRut(rut)
        if (!rutValido) return res.status(400).json({ Error: 'Rut invalido' })

        const medico = {
            rut: rutFormat,
            nombre,
            apellido,
            especialidad,
            lastModifiedDate: new Date()
        }

        const result = await Medico.update(medico,{
                where:{
                    id: medicoId
                }
            })
        result[0] === 0 ? res.status(400).json({Error:'El médico no existe'}) : res.status(200).json({Status: 'Médico actualizado'})
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteMedic = async (req,res) => {
    try {
        const { medicoId } = req.params
       const result =  await Medico.destroy({
            where:{
                id: medicoId
            }
        })
        result === 0 ? res.status(404).json({ Error: 'El médico no existe' }) : res.status(200).json({ Status: 'Médico eliminado' })
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllMedics,
    getMedicById,
    createMedic,
    updateMedic,
    deleteMedic
}