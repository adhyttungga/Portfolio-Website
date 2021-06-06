import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(theme => ({
  div: {
    height: 900,
    width: 300,
    backgroundColor: "red",
    margin: `${theme.spacing(3)}px`
  },
  wrapper: {
    display: "flex",
    flexFlow: "column"
  },
  jumbotron: {
    margin: `${theme.spacing(20)}px 0`
  }
}))

const WebDev = () => {
  const classes = useStyles()
  const [show, setShow] = React.useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  })

  const refOne = React.useRef(null),
  refTwo = React.useRef(null),
  refThree = React.useRef(null)
  
  React.useEffect(() => {
    const topPos = (e) => e.getBoundingClientRect().top
    const divOnePos = topPos(refOne.current),
    divTwoPos = topPos(refTwo.current)
    
    setShow(state => ({ ...state, itemThree: true}))

    const onScroll = () => {
      const scrollPos = window.scrollY + 2*window.innerHeight
      if (divOnePos < scrollPos) {
        setShow(state => ({ ...state, itemOne: true }))
      } else if (divTwoPos < scrollPos) {
        setShow(state => ({ ...state, itemTwo: true }))
      }
      console.log(divTwoPos, divOnePos, scrollPos)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.wrapper}>
        <Paper elevation={0} className={classes.jumbotron}>
          <Typography variant="h2" component="p" align="center">
            <strong>web-development</strong>
          </Typography>
        </Paper>
        <Grow in={show.itemThree}>
          <Paper elevation={0} className={classes.div} ref={refThree}>
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
          </Paper>
        </Grow>
        <Grow in={show.itemTwo}>
          <Paper elevation={0} className={classes.div} ref={refTwo}/>
        </Grow>
        <Grow in={show.itemOne}>
          <Paper elevation={0} className={classes.div} ref={refOne}/>
        </Grow>
      </Paper>
    </React.Fragment>
  )
}

export default WebDev