import request from 'superagent'

const rootUrl = '/api/v1'

export function getFilms () {
  return request.get(rootUrl + '/films')
}

