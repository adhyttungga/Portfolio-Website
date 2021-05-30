import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook';
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  message: {
    flexGrow: 1
  },
  Icon: {
    "&:hover": {
      transition: "0.5s ease", 
      backgroundColor: "white"
    }
  }
}))

const Footer = withRouter(() => {
  const classes = useStyles()
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Typography variant="body1" className={classes.message}>
          Written & designed with ♥ and support.
        </Typography>
        <Link rel="noopener" onClick={(e) => {window.open("https://id-id.facebook.com/adhytia.tungga", "_blank"), e.preventDefault}}>
          <IconButton aria-label="Facebook" className={classes.Icon}>
            <FacebookIcon/>
          </IconButton>
        </Link>
        <Link rel="noopener" onClick={(e) => {window.open("https://www.linkedin.com/in/adhytiatungga/", "_blank"), e.preventDefault}}>
          <IconButton aria-label="LinkedIn" className={classes.Icon}>
            <LinkedInIcon/>
          </IconButton>
        </Link>
        <Link rel="noopener" onClick={(e) => {window.open("https://wa.me/6281296883363", "_blank"), e.preventDefault}}>
          <IconButton aria-label="Whatsapp" className={classes.Icon}>
            <WhatsAppIcon/>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
})

export default Footer