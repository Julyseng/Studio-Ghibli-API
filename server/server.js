const path = require('path')
const express = require('express')

const filmRoutes = require('./routes/films')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/films', filmRoutes)

module.exports = server
