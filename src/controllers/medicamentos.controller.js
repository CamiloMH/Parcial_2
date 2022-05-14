const Medicamento = require('../models/medicamentos')
const sequelize = require('sequelize')

const getAllMedicamentos = async (req, res) => {
  try {
    const medicamentos = await Medicamento.findAll({
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
          [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
        ],
        exclude: ['createdDate', 'lastModifiedDate']
      }
    })
    res.status(200).json(medicamentos)
  } catch (error) {
    res.status(400).json(error)
  }
}

const getMedicamentoById = async (req, res) => {
  try {
    const { medicamentoId } = req.params
    const medicamento = await Medicamento.findByPk(medicamentoId, {
      attributes: {
        include: [
          [sequelize.fn('DATE_FORMAT', sequelize.col('createdDate'), '%d-%m-%Y'), 'createdDate'],
          [sequelize.fn('DATE_FORMAT', sequelize.col('lastModifiedDate'), '%d-%m-%Y'), 'lastModifiedDate']
        ],
        exclude: ['createdDate', 'lastModifiedDate']
      }
    })
    res.status(200).json(medicamento)
  } catch (error) {
    res.status(400).json(error)
  }
}

const createMedicamento = async (req, res) => {
  try {
    const { nombre, stock, fabricante, cantidad, gramaje, estado = null, caducado, motivo = null, descripcion = null } = req.body
    const medicamento = {
      nombre,
      stock,
      fabricante,
      cantidad,
      gramaje,
      estado,
      caducado,
      motivo,
      descripcion,
      createdDate: new Date()
    }

    await Medicamento.create(medicamento)
    res.status(201).json({ Status: 'Medicamento creado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const updateMedicamento = async (req, res) => {
  try {
    const { medicamentoId } = req.params
    const { nombre, stock, fabricante, cantidad, gramaje, estado = null, caducado, motivo = null, descripcion = null } = req.body
    const medicamento = {
      nombre,
      stock,
      fabricante,
      cantidad,
      gramaje,
      estado,
      caducado,
      motivo,
      descripcion,
      lastModifiedDate: new Date()
    }

    const result = await Medicamento.update(medicamento, {
      where: {
        id: medicamentoId
      }
    })
    result[0] === 0 ? res.status(400).json({ Error: 'El medicamento no existe' }) : res.status(200).json({ Status: 'Medicamento actualizado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

const deleteMedicamento = async (req, res) => {
  try {
    const { medicamentoId } = req.params
    const result = await Medicamento.destroy({
      where: {
        id: medicamentoId
      }
    })
    result === 0 ? res.status(404).json({ Error: 'El medicamento no existe' }) : res.status(200).json({ Status: 'Medicamento eliminado' })
  } catch (error) {
    res.status(400).json(error)
  }
}

module.exports = {
  getAllMedicamentos,
  getMedicamentoById,
  createMedicamento,
  updateMedicamento,
  deleteMedicamento
}
