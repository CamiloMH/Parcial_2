const { check } = require('express-validator')
const { validateFields } = require('../middleware/validateFields')

const genarateValidators = () => [
  check('rut', 'El RUT es obligatorio').notEmpty(),
  check('nombre', 'El NOMBRE es obligatorio').notEmpty(),
  check('nombre', 'El NOMBRE no puede superar los 50 caracteres').isLength({ max: 50 }),
  check('nombre', 'El NOMBRE debe ser String').isString(),
  check('apellidos', 'El APELLIDO es obligatorio').notEmpty(),
  check('apellidos', 'El APELLIDO no puede superar los 50 caracteres').isLength({ max: 50 }),
  check('apellidos', 'El APELLIDO debe ser String').isString(),
  check('EspecialidadId', 'La ESPECIALIDAD es obligatoria').notEmpty(),
]

module.exports = {
  validateMedico: [
    genarateValidators(),
    validateFields
  ]
}
