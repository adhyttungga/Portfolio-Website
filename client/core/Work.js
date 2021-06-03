import React from 'react'
import { Link } from 'react-router-dom'
import { Paper, CardMedia, Slide } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import DataScience from './../assets/images/DataScience.png'
import WebDev from './../assets/images/WebDevelopment.jpg'

const useStyles = makeStyles(theme => ({
  Media: {
    width: "100%"
  },
  Paper: {
      position: "relative"
  },
  overlay: {
      position: "absolute",
      top: 0, 
      left: 0,
      padding: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "black",
      transition: "0.8s ease",
      opacity: 0,
      "&:hover": {
          opacity: "0.5"
      }
  }
}))

const Work = (props) => {
  const { children, window } = props
  const classes = useStyles()
  const trigger = useScrollTrigger({
    disableHysteresis: true, 
    threshold: 50
  })

  return (
    <Slide direction="up"
      in={trigger}
      {...(trigger ? { timeout: 1000 } : {})}
      mountOnEnter
    >
      <Paper elevation={0}>
        <Link to="/data-science">
          <Paper elevation={0} className={classes.Paper}>
            <CardMedia component="img" className={classes.Media} image={DataScience} title="Data Science"/>
            <CardMedia component="div" className={classes.overlay}/>
          </Paper>
        </Link>
        <Link to="/web-development">
          <Paper elevation={0} className={classes.Paper}>
            <CardMedia component="img" className={classes.Media} image={WebDev} title="Web Developement"/>
            <CardMedia component="div" className={classes.overlay}/>
          </Paper>
        </Link>
      </Paper>
    </Slide>
  )
}

export default Work
