import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import HomeIcon from '@material-ui/icons/Home'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#ff4051'}
  else
      return {color: '#ffffff'}
}
const useStyles = makeStyles(theme => ({
  appbar: {
    backgroundColor: theme.palette.primary.dark
  }
}))
const Menu = withRouter(({history}) => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.appbar}>
        <Toolbar>
            <Typography variant="h6" color="inherit">
                Adhytia Tungga, S.Si
            </Typography>
            <Link to="/">
                <IconButton aria-label="Home" style={isActive(history, "/")}>
                    <HomeIcon/>
                </IconButton>
            </Link>
            <Link to="/users">
                <Button style={isActive(history, "/users")}>Users</Button>
            </Link>
            <span>
              <Link to="/signup">
                  <Button style={isActive(history, "/signup")}> Sign Up </Button>
              </Link>
              <Link to="/signin">
                  <Button style={isActive(history, "/signin")}> Sign In </Button>
              </Link>
            </span>
        </Toolbar>
    </AppBar>
  )
})

export default Menu