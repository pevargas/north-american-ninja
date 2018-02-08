import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Resume from '../Resume/Resume'

class Page extends React.Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' componenet={Home} />
        <Route path='/resume' componenet={Resume} />
      </Switch>
    )
  }
}

export default Page
