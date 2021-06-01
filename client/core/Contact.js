import React from 'react'
import ButtonMailto from './ButtonMailto'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "70%",
    margin: `50vh auto`
  },
  Contact: {
    margin: `${theme.spacing(5)}px auto`
  }
}))

const Contact = () => {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.root}>
      <Typography variant="h3" component="p" align="center" className={classes.Contact}>
        <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
      </Typography>
      <Typography variant="h4" component="p" align="center" className={classes.Contact}>
        You can also find me on my <Link rel="noopener" to={{ pathname: "https://www.linkedin.com/in/adhytiatungga/"}} target="_blank">LinkedIn</Link>
      </Typography>
    </Paper>
  )
}

export default Contact