const express = require('express')
const { getAllPaciente, obtenerPaciente, crearPaciente, deletePaciente, actualizarPaciente } = require('../controllers/paciente.controller')
const router = express.Router()

router.get('/',getAllPaciente )
router.get('/:pacienteId', obtenerPaciente)
router.post('/', crearPaciente)
router.put('/:pacienteId', actualizarPaciente)
router.delete('/:pacienteId', deletePaciente)

module.exports = router