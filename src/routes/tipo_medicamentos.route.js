const express = require('express');
const { getAllTipoMedicamentos, getTipoMedicamentoById, createTipoMedicamento, updateTipoMedicamento, deleteTipoMedicamento } = require('../controllers/tipo_medicamentos.controller');
const router = express.Router()

router.get('/', getAllTipoMedicamentos)
router.get('/:tipoMedicamentoId', getTipoMedicamentoById)
router.post('/', createTipoMedicamento)
router.put('/:tipoMedicamentoId', updateTipoMedicamento)
router.delete('/:tipoMedicamentoId', deleteTipoMedicamento)

module.exports = router