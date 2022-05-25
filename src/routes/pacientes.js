const express = require('express')
const { obtenerPacientes, obtenerPacienteById, obtenerPacienteByRut, crearPaciente, deletePaciente, actualizarPaciente, softDeletePaciente, restorePaciente, restorePacientes } = require('../controllers/pacientes.controller')
const { validationCreate, validationUpdate, validationId, validationRut, validationRestoreId } = require('../validations/paciente')
const router = express.Router()

/**
 * @api {get} /pacientes Obtener todos los pacientes
 */
router.get('/', obtenerPacientes)

/**
 * @api {get} /pacientes/restore-paciente/ Restaurar todos los pacientes
 */
router.get('/restore-paciente/', restorePacientes)

/**
 * @api {get} /pacientes/restore-paciente/:id Restaurar paciente por id
 */
router.get('/restore-paciente/:id',validationRestoreId, restorePaciente)

/**
 * @api {get} /pacientes/:id Obtener paciente por id
 */
router.get('/:id',validationId, obtenerPacienteById)

/**
 * @api {get} /pacientes/rut/:rut Obtener paciente por rut
 */
router.get('/rut/:rut', validationRut, obtenerPacienteByRut)

/**
 * @api {post} /pacientes/ Crear paciente
 */
router.post('/', validationCreate, crearPaciente)

/**
 * @api {put} /pacientes/:id Actualizar paciente por id
 */
router.put('/:id', validationId,validationUpdate, actualizarPaciente)

/**
 * @api {delete} /pacientes/softDelete/:id Deshabilitar paciente por id
 */
router.delete('/softDelete/:id',validationId, softDeletePaciente)

/**
 * @api {delete} /pacientes/:id Eliminar paciente por id
 */
router.delete('/:id',validationId, deletePaciente)

module.exports = router
