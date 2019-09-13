const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getFilms,
  saveFilms,
  deleteFilms,
  postComments
}


function getFilms () {
  return db('films').select()
}

function saveFilms(films) {
  return db('films').insert(films)
}

function deleteFilms() {
  return db('films').delete()
}

function postComments(comments) {
  return db('comments').insert(comments)
}