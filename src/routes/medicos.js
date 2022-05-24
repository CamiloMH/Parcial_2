const express = require('express')
const router = express.Router()
const { getAllMedics, getMedicoByRUT, getMedicoById, createMedic, updateMedic, deleteMedic, disabledMedic } = require('../controllers/medicos.controller')
const { validateFields } = require('../middleware/validateFields')
const { validateMedico } = require('../validations/validateMedico')

router.get('/', getAllMedics)
router.get('/:medicoId', getMedicoById)
router.get('/rut/:rut', getMedicoByRUT)
router.post('/', validateMedico, createMedic)
router.put('/:medicoId', validateMedico, updateMedic)
router.patch('/:medicoId', validateMedico, disabledMedic)
router.delete('/:medicoId', deleteMedic)

module.exports = router
