import React from 'react'
import AppBar from './AppBar'
import Reboot from 'material-ui/Reboot'

class Main extends React.Component {
  render () {
    return (
      <div>
        <Reboot />
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
