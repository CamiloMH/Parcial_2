const { check } = require('express-validator')
const { validateFields } = require('../middleware/validateFields')


const genarateValidators = () =>[
    check('rut','El RUT es obligatorio').notEmpty(),
    check('nombre','El NOMBRE es obligatorio').notEmpty(),
    check('nombre','El NOMBRE no puede superar los 50 caracteres').isLength({ max: 50}),
    check('nombre','El NOMBRE debe ser String').isString(),
    check('apellido','El APELLIDO es obligatorio').notEmpty(),
    check('apellido','El APELLIDO no puede superar los 50 caracteres').isLength({ max: 50}),
    check('apellido','El APELLIDO debe ser String').isString(),
    check('especialidad','La ESPECIALIDAD es obligatoria').notEmpty(),
    check('especialidad','La ESPECIALIDAD no puede superar los 100 caracteres').isLength({ max: 100}),
    check('especialidad','La ESPECIALIDAD debe ser un String').isLength({ max: 100}),
]

module.exports = { validateMedico : [
    genarateValidators(),
    validateFields
]}