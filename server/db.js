const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getFilms
}


function getFilms () {
  return db('films').select()
}

function postFilms () {
  return db('films').insert({films_id: films.id, })
}
