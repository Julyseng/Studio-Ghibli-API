import React from 'react'
import { getFilms } from '../apiClient'
import Display from './Display'

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

      <Display />
      
      </React.Fragment>
      
    )
  }
}

export default App

// to go with film title 
// <p> {film.description} </p> 
        {/* <header>
          <h1 className='title'>Studio Ghibli Films</h1>
          <h2 className='subtitle'> ~ Better Than Disney ~ </h2>
        </header>

        {/* content  */}
        {/* <div className='body'>
          <ol>
            {this.state.films.map(film => (
              <li key={film.id}>{film.title}</li>
            ))}
          </ol>
        </div> */}