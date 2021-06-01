import React from 'react'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook';
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core"
import { Link, withRouter } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    position: "relative",
    bottom: 0,
    flexGrow: 1
  },
  message: {
    flexGrow: 1,
    fontSize: "1em"
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
        <Typography variant="h6" className={classes.message}>
          Written & designed with ♥ and support.
        </Typography>
        <Link rel="noopener" to={{ pathname: "https://id-id.facebook.com/adhytia.tungga" }} target="_blank">
          <IconButton aria-label="Facebook" className={classes.Icon}>
            <FacebookIcon/>
          </IconButton>
        </Link>
        <Link rel="noopener" to={{ pathname: "https://www.linkedin.com/in/adhytiatungga/" }} target="_blank">
          <IconButton aria-label="LinkedIn" className={classes.Icon}>
            <LinkedInIcon/>
          </IconButton>
        </Link>
        <Link rel="noopener" to={{ pathname: "https://wa.me/6281296883363" }} target="_blank">
          <IconButton aria-label="Whatsapp" className={classes.Icon}>
            <WhatsAppIcon/>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  )
})

export default Footer