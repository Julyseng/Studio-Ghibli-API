import request from 'superagent'

const rootUrl = '/api/v1'

export function getfilms () {
  return request.get(rootUrl + '/films')
    .then(res => {
      return res.body.films
    })
}

// export function getFilms(){
//   return request.get('/api/v1/films')
// }
