import request from 'superagent'

const rootUrl = '/api/v1'

export function getFilms () {
  return request.get(rootUrl + '/films')
}

export function postfilms () {
  return request.post(rootUrl + '/postcomment')
  .send(data)
  .catch(e => { console.log(e)})
}

