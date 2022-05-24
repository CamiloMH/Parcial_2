const express = require('express')
const { getAllFichas, getFichaByRutPaciente, createFicha, updateFicha, deleteFicha } = require('../controllers/fichas.controller')
const router = express.Router()

router.get('/', getAllFichas)
router.get('/:pacienteRUT', getFichaByRutPaciente)
router.post('/', createFicha)
router.put('/:fichaId', updateFicha)
router.delete('/:fichaId', deleteFicha)

module.exports = router
