const { response } = require('express')
const { validationResult } = require('express-validator')

const validateFields = (req, res = response, next) => {
  const errores = validationResult(req)
  let err = ''
  for (const error of errores.array()) {
    err = error.msg
  }

  if (!errores.isEmpty()) {
    return res.status(400).json({
      Error: err
    })
  }

  next()
}

module.exports = { validateFields }
