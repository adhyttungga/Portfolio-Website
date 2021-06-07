import React from 'react'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import NetflixAV from './../assets/images/netflix-analysis-visualization.png'
import ccdataClustering from './../assets/images/ccd-clustering.png'
import loanClustering from './../assets/images/loan-clustering.png'
import loanClassification from './../assets/images/loan-classification.png'
import rpsClassification from './../assets/images/rps-classification.png'

const useStyles = makeStyles(theme => ({
  jumbotron: {
    margin: `${theme.spacing(20)}px 0`
  }
}))

export default function DataScience() {
  const classes = useStyles()

  const [show, setShow] = React.useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
    itemFour: false,
    itemFive: false,
    itemSix: false,
  })

  const refOne = React.useRef(null),
  refTwo = React.useRef(null),
  refThree = React.useRef(null),
  refFour = React.useRef(null)

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setShow(state => ({ ...state, itemSix: true}))
    setShow(state => ({ ...state, itemFive: true}))

    const topPos = (e) => e.getBoundingClientRect().top
    const divOnePos = topPos(refOne.current),
    divTwoPos = topPos(refTwo.current),
    divThreePos = topPos(refThree.current),
    divFourPos = topPos(refFour.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight
      if (divOnePos < scrollPos) {
        setShow(state => ({ ...state, itemOne: true }))
      } else if (divTwoPos < scrollPos) {
        setShow(state => ({ ...state, itemTwo: true }))
      } else if (divThreePos < scrollPos) {
        setShow(state => ({ ...state, itemThree: true }))
      } else if (divFourPos < scrollPos) {
        setShow(state => ({ ...state, itemFour: true }))
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])
  
  return (
    <Paper elevation={0}>
      <Slide 
        in={show.itemSix}
        direction="up"
        {...(show.itemSix ? { timeout: 700 } : {})}
      >
        <Paper elevation={0} className={classes.jumbotron}>
          <Typography variant="h2" component="p" align="center"><strong>data-science</strong></Typography>
        </Paper>
      </Slide>
      <Paper elevation={0}>
        <Slide 
          in={show.itemFive}
          direction="up"
          {...(show.itemFive ? { timeout: 700 } : {})}
        >
          <CardContent>
            <a rel=" noopener noreferrer"  href="https://www.kaggle.com/adhytiatungga/netflix-data-analysis-visualization"  target="_blank">
              <Typography variant="h3" component="p">
                netflix data analysis and visualization 
              </Typography>
            </a>
          </CardContent>
        </Slide>
        <Slide 
          in={show.itemFive}
          direction="up"
          {...(show.itemFive ? { timeout: 1500 } : {})}
        >
          <CardMedia component="img" image={NetflixAV}/>
        </Slide>
      </Paper>
      <Paper elevation={0} ref={refFour}>
        <Slide 
          in={show.itemFour}
          direction="up"
          {...(show.itemFour ? { timeout: 700 } : {})}
        >
          <CardContent>
            <a rel=" noopener noreferrer"  href="https://nbviewer.jupyter.org/github/adhyttungga/Credit_Card_Data-Clustering/blob/main/ccdata_Clustering.ipynb"  target="_blank">
              <Typography variant="h3" component="p">
                credit card data clustering
              </Typography>
            </a>
          </CardContent>
        </Slide>
        <Slide 
          in={show.itemFour}
          direction="up"
          {...(show.itemFour ? { timeout: 1500 } : {})}
        >
          <CardMedia component="img" image={ccdataClustering}/>
        </Slide>
      </Paper>
      <Paper elevation={0} ref={refThree}>
        <Slide 
          in={show.itemThree}
          direction="up"
          {...(show.itemThree ? { timeout: 700 } : {})}
        >
          <CardContent>
            <a rel=" noopener noreferrer"  href="https://nbviewer.jupyter.org/github/adhyttungga/Bank-Loan-Clustering/blob/master/bankLoanCluster.ipynb"  target="_blank">
              <Typography variant="h3" component="p">
                bank loan clustering
              </Typography>
            </a>
          </CardContent>
        </Slide>
        <Slide 
          in={show.itemThree}
          direction="up"
          {...(show.itemThree ? { timeout: 1500 } : {})}
        >
          <CardMedia component="img" image={loanClustering}/>
        </Slide>
      </Paper>
      <Paper elevation={0} ref={refTwo}>
        <Slide 
          in={show.itemTwo}
          direction="up"
          {...(show.itemTwo ? { timeout: 700 } : {})}
        >
          <CardContent>
            <a rel=" noopener noreferrer"  href="https://nbviewer.jupyter.org/github/adhyttungga/Loan-Classification/blob/master/loanPred.ipynb"  target="_blank">
              <Typography variant="h3" component="p">
                loan classification
              </Typography>
            </a>
          </CardContent>
        </Slide>
        <Slide 
          in={show.itemTwo}
          direction="up"
          {...(show.itemTwo ? { timeout: 1500 } : {})}
        >
          <CardMedia component="img" image={loanClassification}/>
        </Slide>
      </Paper>
      <Paper elevation={0} ref={refOne}>
        <Slide 
          in={show.itemOne}
          direction="up"
          {...(show.itemOne ? { timeout: 700 } : {})}
        >
          <CardContent>
            <a rel=" noopener noreferrer"  href="https://nbviewer.jupyter.org/github/adhyttungga/rockpaperscissors-Classification/blob/master/rpsClassification.ipynb"  target="_blank">
              <Typography variant="h3" component="p">
                rock-paper-scissors image classification
              </Typography>
            </a>
          </CardContent>
        </Slide>
        <Slide 
          in={show.itemOne}
          direction="up"
          {...(show.itemOne ? { timeout: 1500 } : {})}
        >
          <CardMedia component="img" image={rpsClassification}/>
        </Slide>
      </Paper>
    </Paper>
  )
}