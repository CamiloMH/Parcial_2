const express = require('express')
const { getAllMedicamentos, getMedicamentoById, createMedicamento, updateMedicamento, deleteMedicamento } = require('../controllers/medicamentos.controller')
const router = express.Router()

router.get('/', getAllMedicamentos)
router.get('/:medicamentoId', getMedicamentoById)
router.post('/', createMedicamento)
router.put('/:medicamentoId', updateMedicamento)
router.delete('/:medicamentoId', deleteMedicamento)

module.exports = router
