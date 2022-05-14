require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

// Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas CEFAM
app.use('/api/medicos', require('./routes/medicos.route'))
app.use('/api/pacientes', require('./routes/pacientes.route'))
app.use('/api/funcionarios', require('./routes/funcionarios.route'))
app.use('/api/fichas', require('./routes/fichas.route'))
app.use('/api/caducidad', require('./routes/caducidad.route'))
app.use('/api/especialidades', require('./routes/especialidades.route'))
app.use('/api/reserva', require('./routes/reserva.route'))
app.use('/api/tipo_medicamentos', require('./routes/tipo_medicamentos.route'))
app.use('/api/medicamentos', require('./routes/medicamentos.route'))

module.exports = app
