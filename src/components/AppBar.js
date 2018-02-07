import React from 'react'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import IconButton from 'material-ui/IconButton'
import MenuIcon from 'material-ui-icons/Menu'

class AppBarIcon extends React.Component {
  render () {
    return (
      <AppBar title='Patrick E. Vargas' position='static'>
        <Toolbar>
          <IconButton color='inherit' aria-label='Menu'>
            <MenuIcon />
          </IconButton>

          <Typography variant='title' color='inherit'>
            Patrick E. Vargas
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

export default AppBarIcon
