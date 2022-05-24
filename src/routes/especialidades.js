const express = require('express');
const { getAllEspecialidades, getEspecialdadById, createEspecialidad, updateEspecialidad, deleteEspecialidad } = require('../controllers/especialidades.controller');
const router = express.Router()

router.get('/', getAllEspecialidades)
router.get('/:id', getEspecialdadById)
router.post('/', createEspecialidad)
router.put('/:id', updateEspecialidad)
router.delete('/:id', deleteEspecialidad)

module.exports = router