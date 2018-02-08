import React from 'react'
import { Link } from 'react-router-dom'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

class NavBar extends React.Component {
  render () {
    return (
      <nav>
        <AppBar title='Patrick E. Vargas' position='static'>
          <Toolbar>
            <IconButton color='inherit' aria-label='Menu'>
              <MenuIcon />
            </IconButton>

            <Typography variant='title' color='inherit'>
              Patrick E. Vargas
            </Typography>

            <ul>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/resume'>Resume</Link></li>
            </ul>
          </Toolbar>
        </AppBar>
      </nav>
    )
  }
}

export default NavBar
