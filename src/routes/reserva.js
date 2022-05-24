const express = require('express');
const { getEspecialdadById } = require('../controllers/especialidades.controller');
const { getAllReservas, createReserva, updateReserva, deleteReserva } = require('../controllers/reserva.controller');
const router = express.Router()

router.get('/', getAllReservas)
router.get('/:reservaId', getEspecialdadById)
router.post('/', createReserva)
router.put('/:reservaId', updateReserva)
router.delete('/:reservaId', deleteReserva)

module.exports = router