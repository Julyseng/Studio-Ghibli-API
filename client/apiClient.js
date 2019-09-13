import request from 'superagent'

const rootUrl = '/api/v1'

export function getFilms () {
  return request.get(rootUrl + '/films')
}

export function postComments (data) {
  console.log(data)
  return request.post(rootUrl + '/postComment')
  .send(data)
  .catch(e => { console.log(e)})
}
