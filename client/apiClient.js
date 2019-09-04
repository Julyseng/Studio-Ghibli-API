import request from 'superagent'

const rootUrl = '/api/v1'

export function getFruits () {
  return request.get(rootUrl + '/fruits')
    .then(res => {
      return res.body.fruits
    })
}

export function getFilms(){
  return request.get('https://ghibliapi.herokuapp.com/films')
}
