import React from 'react'
import { getFilms } from '../apiClient'
import Display from './Display'
import Navs from './Nav'
import Comment from './Comment'

class App extends React.Component {
  state = {
    films: []
  }

  render() {
    return (

      //header section
      <React.Fragment>
         <header>
          <h1 className='title'>Studio Ghibli Films</h1>
          <h2 className='subtitle'> ~ Better Than Disney ~ </h2>

          <Navs />
        </header>

        <Display />
        <Comment />
      </React.Fragment>
      
    )
  }
}

export default App
