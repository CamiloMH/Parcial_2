const express = require('express')
const router = express.Router()
const { getAllMedics, getMedicoByRUT, getMedicoById, createMedic, updateMedic, deleteMedic, disabledMedic } = require('../controllers/medicos.controller')

router.get('/', getAllMedics)
router.get('/:medicoId', getMedicoById)
router.get('/rut/:rut', getMedicoByRUT)
router.post('/', createMedic)
router.put('/:medicoId', updateMedic)
router.patch('/:medicoId', disabledMedic)
router.delete('/:medicoId', deleteMedic)

module.exports = router
