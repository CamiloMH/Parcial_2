const express = require('express')
const router = express.Router()
const { getAllMedics, getMedicoByRUT, createMedic, updateMedic, deleteMedic } = require('../controllers/medico.controller')
const { validateFields } = require('../middleware/validateFields')
const {validateMedico} = require('../middleware/validateMedico')

router.get('/', getAllMedics)
router.get('/:rut', getMedicoByRUT)
router.post('/', validateMedico, createMedic)
router.put('/:medicoId', updateMedic)
router.delete('/:medicoId', deleteMedic)


module.exports = router