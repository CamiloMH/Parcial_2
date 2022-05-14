const express = require('express')
const router = express.Router()
const { getAllMedics, getMedicoByRUT, createMedic, updateMedic, deleteMedic } = require('../controllers/medicos.controller')
const { validateFields } = require('../middleware/validateFields')
const { validateMedico } = require('../validations/validateMedico')

router.get('/', getAllMedics)
router.get('/:rut', getMedicoByRUT)
router.post('/', validateMedico, createMedic)
router.put('/:medicoId', validateMedico, updateMedic)
router.delete('/:medicoId', deleteMedic)

module.exports = router
