const Caducidad = require('../models/caducidad')
const sequelize = require('sequelize')

const getAllCaducidad = async (req,res) => {
    try {
        const caducidad = await Caducidad.findAll({
            attributes: {
                include: [
                  [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
                  [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
                ],
                exclude: ['createdDate', 'lastModifiedDate']
              }
        })
        res.status(200).json(caducidad)
    } catch (error) {
      res.status(400).json(error)
    }
}

const getCaducidadById = async (req,res) => {
    try {
        const { caducidadId } = req.params
        const caducidad = await Caducidad.findOne({
            where: {
               id: caducidadId
            }
        })
        res.status(200).json(caducidad || {})
    } catch (error) {
      res.status(400).json(error)
    }
}

const createCaducidad = async (req,res) => {
    try {
        const { motivo } = req.body
        const caducidad = {
            motivo,
            createdDate: new Date()
        }
        await Caducidad.create(caducidad)

        res.status(201).json({Status:"Caducidad creada"})
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateCaducidad = async (req,res) => {
    try {
        const { caducidadId } = req.params
        const { motivo } = req.body

        const caducidad = {
            motivo,
            lastModifiedDate: new Date()
        }

        const result = await Caducidad.update(caducidad,{
            where: {
                id: caducidadId
            }
        })
        result[0] === 0 ? res.status(400).json({ Error: 'No existe caducidad' }) : res.status(200).json({ Status: 'Caducidad actualizada' })
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteCaducidad = async (req,res) => {
    try {
        const { caducidadId } = req.params
        const result = await Caducidad.destroy({
            where:{
                id: caducidadId
            }
        })
        result === 0 ? res.status(404).json({ Error: 'No existe caducidad' }) : res.status(200).json({ Status: 'Caducidad eliminada' })
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllCaducidad,
    getCaducidadById,
    createCaducidad,
    updateCaducidad,
    deleteCaducidad
}