import React from 'react'
import { Link }  from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  link: {
    color: theme.palette.secondary.dark
  }
}))

const ButtonMailto = ({ mailto, label }) => {
  const classes = useStyles()
  const handleToggle = (e) => {
    window.location = mailto,
    e.preventDefault()
  }
  return (
    <Link to="#" onClick = {handleToggle} rel="noopener" className={classes.link}>
        {label}
    </Link>
  )
}

export default ButtonMailto