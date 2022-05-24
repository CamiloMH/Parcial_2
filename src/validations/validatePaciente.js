const { check } = require('express-validator')
const { validateFields } = require('../middleware/validateFields')

const genarateValidators = () => [
  check('rut', 'El RUT es obligatorio').notEmpty(),
  check('rut', 'El RUT debe ser INTEGER y de máximo 8').isInt().isLength({ max:8 }),
  check('dv', 'El DV es obligatorio').notEmpty(),
  check('dv', 'El DV debe ser string y de un caracter').isString().isLength({ min:1, max:1}),
  check('nombre', 'El NOMBRE es obligatorio').notEmpty(),
  check('nombre', 'El NOMBRE no puede superar los 50 caracteres').isLength({ max: 50 }),
  check('nombre', 'El NOMBRE debe ser String').isString(),
  check('apellidos', 'El APELLIDO es obligatorio').notEmpty(),
  check('apellidos', 'El APELLIDO no puede superar los 150 caracteres').isLength({ max: 150 }),
  check('apellidos', 'El APELLIDO debe ser String').isString(),
  check('edad', 'La EDAD es obligatoria').notEmpty(),
  check('edad', 'La EDAD debe ser INTEGER').isInt({min:0 , max:99}),
  check('edad', 'La EDAD no debe superar los 3 dígitos').isLength({max: 2}),
  check('correo','El CORREO es obligatorio').notEmpty(),
  check('correo','El CORREO debe ser valido').isEmail(),
  check('correo','El CORREO debe tener menos de 150').isLength({max:150}),
  check('celular','El CELULAR es obligatorio').notEmpty(),
  check('celular','El CELULAR debe ser INTEGER').isInt(),
  check('celular','El CELULAR debe ser de máximo 9 números').isLength({max:9}),

]

module.exports = {
  validatePaciente: [
    genarateValidators(),
    validateFields
  ]
}
