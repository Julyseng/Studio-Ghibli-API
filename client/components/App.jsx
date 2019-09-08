import React from 'react'
import { getFilms } from '../apiClient'

class App extends React.Component {
  state = {
    films: []
  }
  componentDidMount() {
    getFilms()
      .then(res => {
        this.setState({ films: res.body })
      })
  }
  render() {
    return (

      //header section
      <React.Fragment>
        <header>
          <h1 className='title'>Studio Ghibli Films</h1>
          <h2 className='subtitle'> ~ Better Than Disney ~ </h2>
        </header>

        {/* content  */}
        <div className='body'>
          <ol>
            {this.state.films.map(film => (
              <li key={film.id}>{film.title} <p> {film.description} </p> </li>
            ))}
          </ol>
        </div>

      </React.Fragment>
      
    )
  }
}

export default App
