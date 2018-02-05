import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import MainContainer from '../components/Main'
import HomeContainer from '../containers/HomeContainer'

const routes = (
  <Router>
    <Route path='/' component={MainContainer}>
      <Route component={HomeContainer} />
    </Route>
  </Router>
)

export default routes
