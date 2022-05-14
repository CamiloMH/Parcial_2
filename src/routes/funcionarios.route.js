const express = require('express');
const { getAllFuncionarios, getFuncionarioById, createFuncionario, updateFuncionario, deleteFuncionario } = require('../controllers/funcionarios.controller');
const router = express.Router()

router.get('/', getAllFuncionarios)
router.get('/:funcionarioId', getFuncionarioById)
router.post('/', createFuncionario)
router.put('/:funcionarioId', updateFuncionario)
router.delete('/:funcionarioId', deleteFuncionario)

module.exports = router