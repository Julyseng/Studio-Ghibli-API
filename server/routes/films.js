const express = require('express')

const db = require('../db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getFilms()
  .then(films => {
    res.json(films)
  })
})

module.exports = router
