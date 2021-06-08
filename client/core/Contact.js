import React from 'react'
import ButtonMailto from './ButtonMailto'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Slide } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    margin: `50vh auto`,
    backgroundColor: theme.palette.primary.main
  },
  Contact: {
    margin: `${theme.spacing(3)}px auto`,
    "& > *": {
      color: theme.palette.secondary.dark
    }
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
      <Slide direction="right" 
        in={visible}
        {...(visible ? { timeout: 1000 } : {})}
      >
        <Typography variant="h2" component="p" align="center" className={classes.Contact}>
          <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
        </Typography>
      </Slide>
      <Slide direction="right"
        in={visible} 
        {...(visible ? { timeout: 1500 } : {})}
      >
        <Typography variant="h6" component="p" align="center" className={classes.Contact}>
          You can also find me on my <a rel="noopener noreferrer" href="https://www.linkedin.com/in/adhytiatungga/" target="_blank">LinkedIn</a>
        </Typography>
      </Slide>
    </Paper>
  )
}

export default Contact