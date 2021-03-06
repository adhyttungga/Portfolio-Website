import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import GitHubIcon from '@material-ui/icons/GitHub'
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.dark,
    position: "relative",
    bottom: 0,
    flexGrow: 1
  },
  toolbar: {
    '@media (max-width: 600px)': {
      flexWrap: "wrap"
    }
  },
  message: {
    color: theme.palette.primary.light,
    flexGrow: 1,
    fontSize: "1em",
    '@media (max-width: 600px)': {
      width: "100%",
      fontSize: "3.5vw"
    }
  },
  Icon: {
    color: theme.palette.primary.light,
    "&:hover": {
      transition: "0.5s ease", 
      color: theme.palette.secondary.main
    }
  }
}))

const Footer = withRouter(() => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar className={classes.toolbar}>
        <Typography variant="h6" className={classes.message}>
          Written & designed with ♥ and support.
        </Typography>
        <a rel="noopener noreferrer" href="https://id-id.facebook.com/adhytia.tungga" target="_blank">
          <IconButton aria-label="Facebook" className={classes.Icon}>
            <FacebookIcon/>
          </IconButton>
        </a>
        <a rel="noopener noreferrer" href="https://www.linkedin.com/in/adhytiatungga/" target="_blank">
          <IconButton aria-label="LinkedIn" className={classes.Icon}>
            <LinkedInIcon/>
          </IconButton>
        </a>
        <a rel="noopener noreferrer" href="https://github.com/adhyttungga" target="_blank">
          <IconButton aria-label="GitHub" className={classes.Icon}>
            <GitHubIcon/>
          </IconButton>
        </a>
        <a rel="noopener noreferrer" href="https://wa.me/6281296883363" target="_blank">
          <IconButton aria-label="Whatsapp" className={classes.Icon}>
            <WhatsAppIcon/>
          </IconButton>
        </a>
      </Toolbar>
    </AppBar>
  )
})

export default Footer