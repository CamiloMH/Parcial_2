const express = require('express');
const { getAllCaducidad, getCaducidadById, createCaducidad, updateCaducidad, deleteCaducidad } = require('../controllers/caducidad.controller');
const router = express.Router()

router.get('/', getAllCaducidad )
router.get('/:caducidadId', getCaducidadById)
router.post('/', createCaducidad)
router.put('/:caducidadId', updateCaducidad)
router.delete('/:caducidadId', deleteCaducidad)

module.exports = router