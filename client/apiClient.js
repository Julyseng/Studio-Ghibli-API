import request from 'superagent'

const rootUrl = '/api/v1'

export function getFilms () {
  return request.get(rootUrl + '/films')
}

// export function getFilms(){
//   return request.get('/api/v1/films')
// }
