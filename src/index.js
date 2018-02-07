/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-enable no-unused-vars */
import ReactDOM from 'react-dom'
import './index.css'
import routes from './config/routes'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
