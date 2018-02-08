import ReactDOM from 'react-dom'
import App from './App'

it('renders without crashing', () => {
  const test = document.createElement('test')
  ReactDOM.render(App, test)
  ReactDOM.unmountComponentAtNode(test)
})
