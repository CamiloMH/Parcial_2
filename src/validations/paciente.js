const { check } = require('express-validator')
const { findId, findRutParam, validateRut, validateAge, validateMobilePhone, validateEmailExists } = require('../helpers/findPaciente')
const validateResults = require('../middleware/handleValidator')


const validationId = [
  check('id')
    .exists()
    .withMessage('El parametro id es requerido')
    .isLength({ min: 1, max: 10 })
    .withMessage('El parametro id debe tener entre 1 y 10 caracteres')
    .custom((value, { req }) => findId(value)),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validationRut = [
  check('rut')
    .exists()
    .withMessage('El parametro rut es requerido')
    .custom((value, { req }) => findRutParam(value, req)),
    (req, res, next) => {
      return validateResults(req, res, next)
    }
]

const validationRestoreId = [
  check('id')
    .exists()
    .withMessage('El parametro id es requerido')
    .isLength({ min: 1, max: 10 })
    .withMessage('El parametro id debe tener entre 1 y 10 caracteres'),
    (req, res, next) => {
      return validateResults(req, res, next)
    }
]

const validationCreate = [
  check('rut')
    .exists()
    .withMessage('La propiedad rut es requerida')
    .notEmpty()
    .withMessage('La propiedad rut no puede estar vacia')
    .custom((value, { req }) => validateRut(value,req)),
  check('dv')
    .exists()
    .withMessage('La propiedad dv es requerida')
    .notEmpty()
    .withMessage('La propiedad dv no puede estar vacia')
    .isLength({ min: 1,max: 1 })
    .withMessage('La propiedad dv debe tener 1 caracter'),
  check('nombre')
    .exists()
    .withMessage('La propiedad nombre es requerida')
    .notEmpty()
    .withMessage('La propiedad nombre no puede estar vacia')
    .isLength({ min: 1,max: 50 })
    .withMessage('La propiedad nombre debe tener entre 1 y 50 caracteres')
    .trim(),
  check('apellidos')
    .exists()
    .withMessage('La propiedad apellidos es requerida')
    .notEmpty()
    .withMessage('La propiedad apellidos no puede estar vacia')
    .isLength({ min: 1,max: 50 })
    .withMessage('La propiedad apellidos debe tener entre 1 y 50 caracteres')
    .trim(),
  check('edad')
    .exists()
    .withMessage('La propiedad edad es requerida')
    .notEmpty()
    .withMessage('La propiedad edad no puede estar vacia')
    .custom((value, { req }) => validateAge(value,req)),
   check('correo')
    .exists()
    .withMessage('La propiedad correo es requerida')
    .notEmpty()
    .withMessage('La propiedad correo no puede estar vacia')
    .isLength({ min: 1,max: 150 })
    .withMessage('La propiedad correo debe tener entre 1 y 150 caracteres')
    .trim()
    .isEmail()
    .withMessage('El correo no es valido')
    .custom((value, { req }) => validateEmailExists(value,req, 'post')),
  check('celular')
    .exists()
    .withMessage('La propiedad celular es requerida')
    .notEmpty()
    .withMessage('La propiedad celular no puede estar vacia')
    .custom((value, { req }) => validateMobilePhone(value,req)),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validationUpdate = [
  check('nombre')
    .exists()
    .withMessage('La propiedad nombre es requerida')
    .notEmpty()
    .withMessage('La propiedad nombre no puede estar vacia')
    .isLength({ min: 1,max: 50 })
    .withMessage('La propiedad nombre debe tener entre 1 y 50 caracteres')
    .trim(),
  check('apellidos')
    .exists()
    .withMessage('La propiedad apellidos es requerida')
    .notEmpty()
    .withMessage('La propiedad apellidos no puede estar vacia')
    .isLength({ min: 1,max: 50 })
    .withMessage('La propiedad apellidos debe tener entre 1 y 50 caracteres')
    .trim(),
  check('edad')
    .exists()
    .withMessage('La propiedad edad es requerida')
    .notEmpty()
    .withMessage('La propiedad edad no puede estar vacia')
    .custom((value, { req }) => validateAge(value,req)),
   check('correo')
    .exists()
    .withMessage('La propiedad correo es requerida')
    .notEmpty()
    .withMessage('La propiedad correo no puede estar vacia')
    .isLength({ min: 1,max: 150 })
    .withMessage('La propiedad correo debe tener entre 1 y 150 caracteres')
    .trim()
    .isEmail()
    .withMessage('El correo no es valido')
    .custom((value, { req }) => validateEmailExists(value,req, 'put')),
  check('celular')
    .exists()
    .withMessage('La propiedad celular es requerida')
    .notEmpty()
    .withMessage('La propiedad celular no puede estar vacia')
    .custom((value, { req }) => validateMobilePhone(value,req)),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

module.exports = { validationCreate, validationUpdate, validationId, validationRut, validationRestoreId }
