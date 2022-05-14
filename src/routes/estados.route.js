const express = require('express');
const { getEspecialdadById } = require('../controllers/especialidades.controller');
const { getAllEstados, createEstado, updateEstado, deleteEstado } = require('../controllers/estados.controller');
const router = express.Router()

router.get('/', getAllEstados)
router.get('/:estadoId', getEspecialdadById)
router.post('/', createEstado)
router.put('/:estadoId', updateEstado)
router.delete('/:estadoId', deleteEstado)

module.exports = router