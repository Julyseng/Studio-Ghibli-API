const env = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[env]
const db = require('knex')(config)

module.exports = {
  getFilms,
  saveFilms,
  deleteFilms,
  getFilms,
  postComments,
  getComments
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


function getComments () {
  return db('comments').select()
}

function postComments(data) {
  return db('comments').insert(data)//promise
  
}

