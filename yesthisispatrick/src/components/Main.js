import React from 'react'
import AppBar from './AppBar'

class Main extends React.Component {
  render () {
    return (
      <div>
        <header>
          <AppBar />
        </header>
        <article>
          <h1>Main</h1>
        </article>
      </div>
    )
  }
}

export default Main
