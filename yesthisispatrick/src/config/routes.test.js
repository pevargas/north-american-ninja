// import React from 'react'
import ReactDOM from 'react-dom'
import routes from './routes'
import { it } from 'jest'

it('renders without crashing', () => {
  const test = document.createElement('test')
  ReactDOM.render(routes, test)
  ReactDOM.unmountComponentAtNode(test)
})
