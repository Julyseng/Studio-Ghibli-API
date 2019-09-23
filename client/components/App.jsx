import React from 'react'
import Display from './Display'
import Navs from './Nav'
import Comment from './Comment'
import DisplayComments from './DisplayComments'

const App = () => {
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
        <DisplayComments />
      </React.Fragment>
      
    )
  }


export default App
