const path = require('path')
const express = require('express')
const db = require ('./db')

const filmRoutes = require('./routes/films')

const server = express()

server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/films', filmRoutes)

server.post('/api/v1/postComment', (req, res) => {
    console.log(req.body)
    db.postComments(req.body)
    .then((data  => {
        res.send(data)
    }) )
})



module.exports = server
