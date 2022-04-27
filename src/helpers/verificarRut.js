const { validate, clean, format } = require('rut.js')

const verificarRut = (rut) => {
  clean(rut)
  const rutFormat = format(rut)
  const rutValido = validate(rutFormat)
  return { rutFormat, rutValido }
}

module.exports = { verificarRut }
