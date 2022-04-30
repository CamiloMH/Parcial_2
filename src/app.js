require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Rutas CEFAM
app.use('/api/medicos', require('./routes/medico.route'))
app.use('/api/pacientes', require('./routes/pacientes.route'))
app.use('/api/fichas', require('./routes/fichas.route'))

//Rutas Farmacia
app.use('/api/medicamentos', require('./routes/medicamento.route'))


module.exports = app
