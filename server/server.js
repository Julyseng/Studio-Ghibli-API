const path = require('path')
const express = require('express')
const db = require ('./db')

const filmRoutes = require('./routes/films')

const server = express()

server.use(express.json())
server.use(express.static(path.join(__dirname, 'public')))

server.use('/api/v1/films', filmRoutes)

server.post('/api/v1/postComment', (req, res) => {
    return db.postComments(req.body)
    .then((comments  => {
        res.send(comments)
    }) )
})

server.get('/api/v1/comments', async (req,res) => {
    const comments = await db.getComments(req.body)
    res.send(comments)
})



module.exports = server
