const express = require('express')
const { obtenerPacientes, obtenerPacienteById, obtenerPacienteByRut, crearPaciente, deletePaciente, actualizarPaciente, disabledPaciente } = require('../controllers/pacientes.controller')
const { validateFields } = require('../middleware/validateFields')
const { validatePaciente } = require('../validations/validatePaciente')
const router = express.Router()

router.get('/', obtenerPacientes)
router.get('/:pacienteId', obtenerPacienteById)
router.get('/rut/:rut', obtenerPacienteByRut)
router.post('/', validatePaciente, crearPaciente)
router.put('/:pacienteId', actualizarPaciente)
router.patch('/:pacienteId', disabledPaciente)
router.delete('/:pacienteId', deletePaciente)

module.exports = router
