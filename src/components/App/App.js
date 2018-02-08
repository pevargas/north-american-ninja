import React from 'react'
import Reboot from 'material-ui/Reboot'
import NavBar from '../NavBar/NavBar'
import Page from '../Page/Page'

class App extends React.Component {
  render () {
    return (
      <div>
        <Reboot />
        <header>
          <NavBar />
        </header>
        <article>
          <Page />
        </article>
      </div>
    )
  }
}

export default App
