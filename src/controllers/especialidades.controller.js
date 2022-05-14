const Especialidad = require("../models/especialidad")

const getAllEspecialidades = async (req,res) => {
    try {
        const especialidades = await Especialidad.findAll({
            attributes: {
                include: [
                  [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
                  [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
                ],
                exclude: ['createdDate', 'lastModifiedDate']
              }
        })
        res.status(200).json(especialidades)
    } catch (error) {
        res.status(400).json(error)
    }
}

const getEspecialdadById = async (req,res) => {
    try {
        const { especialidadId } = req.params
        const especialidad = await Especialidad.findOne({
            where:{
                id: especialidadId
            }
        })
        res.status(200).json(especialidad || {})
    } catch (error) {
        res.status(400).json(error)
    }
}

const createEspecialidad = (req,res) => {
    try {
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const updateEspecialidad = (req,res) => {
    try {
        
    } catch (error) {
        res.status(400).json(error)
    }
}

const deleteEspecialidad = (req,res) => {
    try {
        
    } catch (error) {
        res.status(400).json(error)
    }
}

module.exports = {
    getAllEspecialidades,
    getEspecialdadById,
    createEspecialidad,
    updateEspecialidad,
    deleteEspecialidad
}