require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

//Middlewares
app.use(express.json())
app.use(express.urlencoded({ extended: true}))

//Rutas
app.use('/api/medicos', require('./routes/medico.route'))
app.use('/api/pacientes', require('./routes/pacientes.route'))

module.exports = app
