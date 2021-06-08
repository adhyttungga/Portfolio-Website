import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'
import {Link, withRouter} from 'react-router-dom'

const isActive = (history, path) => {
  if (history.location.pathname == path)
    return {color: '#9aceff'}
  else
      return {color: '#fffdfe'}
}

const useStyles = makeStyles(theme => ({
  Appbar: {
    backgroundColor: theme.palette.primary.dark,
    flexGrow: 1
  },
  Logo: {
    color: theme.palette.primary.light,
    flexGrow: 1
  }
}))

const Menu = withRouter(({history}) => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.Appbar} elevation={0}>
        <Toolbar>
            <Typography variant="h6" color="inherit" className={classes.Logo}>
                Adhytia Tungga, BS
            </Typography>
            <Link to="/">
              <Button style={isActive(history, "/")}>Work</Button>
            </Link>
            <Link to="/contact">
                <Button style={isActive(history, "/contact")}>Contact</Button>
            </Link>
        </Toolbar>
    </AppBar>
  )
})

export default Menu