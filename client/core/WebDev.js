import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grow from '@material-ui/core/Grow'

const useStyles = makeStyles(theme => ({
  div: {
    height: 900,
    width: 300,
    backgroundColor: "red",
    // transform: `translateX(${({ animate }) => (animate ? "0" : "-100vw")})`,
    // transition: "transfrom 1s",
    margin: `${theme.spacing(3)}px`
  },
  wrapper: {
    marginTop: "100vh",
    display: "flex",
    flexFlow: "column"
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
    const topPos = (e) => {e.getBoundingClientRect().top}

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      if (topPos(refOne.current) < scrollPos) {
        setShow(state => ({ ...state, itemOne: true }))
      } else if (topPos(refTwo.current) < scrollPos) {
        setShow(state => ({ ...state, itemTwo: true }))
      } else if (topPos(refThree.current) < scrollPos) {
        setShow(state => ({ ...state, itemThree: true }))
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <React.Fragment>
      <Paper elevation={0}className={classes.wrapper}>
        <Grow in={show.itemOne} ref={refOne}>
          <Paper elevation={0} className={classes.Div}>
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
            <p>tag here</p>
          </Paper>
        </Grow>
        <Grow in={show.itemTwo} ref={refTwo}>
          <Paper elevation={0} className={classes.Div}/>
        </Grow>
        <Grow in={show.itemThree} ref={refThree}>
          <Paper elevation={0} className={classes.Div}/>
        </Grow>
      </Paper>
    </React.Fragment>
  )
}

export default WebDev