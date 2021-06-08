import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  wrapper: {
    display: "flex",
    flexFlow: "column",
    backgroundColor: theme.palette.primary.main
  },
  jumbotron: {
    margin: `${theme.spacing(20)}px 0`,
    backgroundColor: theme.palette.primary.main
  }
}))

const WebDev = () => {
  const classes = useStyles()
  const [show, setShow] = React.useState({
    itemOne: false
  })

  const refOne = React.useRef(null),
  refTwo = React.useRef(null)
  
  React.useEffect(() => {
    window.scrollTo(0, 0)

    setShow(state => ({ ...state, itemOne: true}))
    
    // const topPos = (e) => e.getBoundingClientRect().top
    // const divOnePos = topPos(refOne.current),
    // divTwoPos = topPos(refTwo.current)
    
    // const onScroll = () => {
    //   const scrollPos = window.scrollY + window.innerHeight
    //   if (divOnePos < scrollPos) {
    //     setShow(state => ({ ...state, itemOne: true }))
    //   } else if (divTwoPos < scrollPos) {
    //     setShow(state => ({ ...state, itemTwo: true }))
    //   }
    // }

    // window.addEventListener("scroll", onScroll)
    // return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.wrapper}>
        <Slide direction="right" {...(show.itemOne ? { timeout: 1000 } : {})} in={show.itemOne}>
        <Paper elevation={0} className={classes.jumbotron} id="back-to-top-anchor">
          <Typography variant="h2" component="p" align="center">
            <strong>web-development</strong>
          </Typography>
        </Paper>
        </Slide>
      </Paper>
    </React.Fragment>
  )
}

export default WebDev