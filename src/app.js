require('dotenv').config({ path: '.env' })
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const app = express()

app.use(cors())

// Middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Rutas CESFAM
app.use('/api', require('./routes'))

// Manejador general de errores 404 (al final del listado de rutas de los endpoints)
app.use(function (req, res) {
    res.status(404).send({Error:'La ruta no existe'})
  })

module.exports = app
