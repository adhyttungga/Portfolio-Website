import React from 'react'
import ButtonMailto from './ButtonMailto'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Grow } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: `50vh auto`
  },
  Contact: {
    margin: `${theme.spacing(3)}px auto`
  }
}))

const Contact = () => {
  const classes = useStyles()
  const [visible, setVisible] = React.useState(false)
  
  React.useEffect(() => {
    setVisible(true)

    window.scrollTo(0, 0)
  }, [])

  return (
    <Paper elevation={0} className={classes.root}>
      <Grow in={visible}>
        <Typography variant="h2" component="p" align="center" className={classes.Contact}>
          <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
        </Typography>
      </Grow>
      <Grow 
        in={visible} 
        style={{ transformOrigin: '50% 50%' }} 
        {...(visible ? { timeout: 1000 } : {})}
      >
        <Typography variant="h6" component="p" align="center" className={classes.Contact}>
          You can also find me on my <a rel="noopener noreferrer" href="https://www.linkedin.com/in/adhytiatungga/" target="_blank">LinkedIn</a>
        </Typography>
      </Grow>
    </Paper>
  )
}

export default Contact