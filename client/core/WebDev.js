import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import TopAttraction from './../assets/images/jakarta-top-attraction.png'

const useStyles = makeStyles(theme => ({
  Paper: {
    backgroundColor: theme.palette.primary.main
  },
  jumbotron: {
    margin: `${theme.spacing(20)}px 0`,
    backgroundColor: theme.palette.primary.main
  },
  link: {
    color: theme.palette.secondary.dark
  }
}))

const WebDev = () => {
  const classes = useStyles()
  const [show, setShow] = React.useState({
    itemOne: false,
    itemTwo: false
  })

  const refOne = React.useRef(null)
  // refTwo = React.useRef(null)
  
  React.useEffect(() => {
    window.scrollTo(0, 0)

    setShow(state => ({ ...state, itemTwo: true}))
    
    const topPos = (e) => e.getBoundingClientRect().top
    const divOnePos = topPos(refOne.current)
    // divTwoPos = topPos(refTwo.current)
    
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      if (divOnePos < scrollPos) {
        setShow(state => ({ ...state, itemOne: true }))
      // } else if (divTwoPos < scrollPos) {
      //   setShow(state => ({ ...state, itemTwo: true }))
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <React.Fragment>
      <Paper elevation={0} className={classes.Paper}>
        <Slide direction="right" {...(show.itemTwo ? { timeout: 1000 } : {})} in={show.itemTwo}>
          <Paper elevation={0} className={classes.jumbotron} id="back-to-top-anchor">
            <Typography variant="h2" component="p" align="center">
              <strong>web-development</strong>
            </Typography>
          </Paper>
        </Slide>
        <Paper className={classes.Paper} elevation={0} ref={refOne}>
          <Slide 
            in={show.itemOne}
            direction="right"
            {...(show.itemOne ? { timeout: 700 } : {})}
          >
            <CardContent>
              <a className={classes.link} rel=" noopener noreferrer"  href="https://adhyttungga.github.io/Jakarta-topAttraction"  target="_blank">
                <Typography variant="h3" component="p">
                  jakarta top attraction
                </Typography>
              </a>
            </CardContent>
          </Slide>
          <Slide 
            in={show.itemOne}
            direction="right"
            {...(show.itemOne ? { timeout: 1500 } : {})}
          >
            <CardMedia component="img" image={TopAttraction}/>
          </Slide>
        </Paper>
      </Paper>
    </React.Fragment>
  )
}

export default WebDev