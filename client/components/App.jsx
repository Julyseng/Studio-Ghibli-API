import React from 'react'
import { getFilms } from '../apiClient'

class App extends React.Component {
  state = {
    films: []
  }
  componentDidMount () {
    getFilms()
    .then(res => {
      this.setState({films: res.body})
    })
  }
  render () {
    return (
      <div className='app'>
        <h1>Studio Ghibli films</h1>
        <ol>
          {this.state.films.map(film => (
            <li key={film.id}>{film.title}</li>
          ))}
        </ol>
      </div>
    )
  }
}

export default App
