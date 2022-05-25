const express = require('express')
const { obtenerPacientes, obtenerPacienteById, obtenerPacienteByRut, crearPaciente, deletePaciente, actualizarPaciente, softDeletePaciente, restorePaciente, restorePacientes } = require('../controllers/pacientes.controller')
const { validationCreate, validationUpdate, validationId, validationRut, validationRestoreId } = require('../validations/paciente')
const router = express.Router()

router.get('/', obtenerPacientes)
router.get('/restore-paciente/', restorePacientes)
router.get('/restore-paciente/:id',validationRestoreId, restorePaciente)
router.get('/:id',validationId, obtenerPacienteById)
router.get('/rut/:rut', validationRut, obtenerPacienteByRut)
router.post('/', validationCreate, crearPaciente)
router.put('/:id', validationId,validationUpdate, actualizarPaciente)
router.delete('/softDelete/:id',validationId, softDeletePaciente)
router.delete('/:id',validationId, deletePaciente)

module.exports = router
