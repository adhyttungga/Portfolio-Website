import React from 'react'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import CardMedia from '@material-ui/core/CardMedia'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import NetflixAV from './../assets/images/netflix-analysis-visualization.png'
import ccdataClustering from './../assets/images/ccd-clustering.png'
import loanClustering from './../assets/images/loan-clustering.png'
import loanClassification from './../assets/images/loan-classification.png'
import rpsClassification from './../assets/images/rps-classification.png'

const useStyles = makeStyles(theme => ({}))

export default function DataScience() {
  const classes = useStyles()
  return (
    <Paper elevation={0}>
      <Paper elevation={0}>
        <CardContent>
          <Link rel="noopener" to={{ pathname: "https://www.kaggle.com/adhytiatungga/netflix-data-analysis-visualization"}} target="_blank">
            <Typography variant="h3" component="p">
              netflix data analysis and visualization 
            </Typography>
          </Link>
        </CardContent>
        <CardMedia component="img" image={NetflixAV}/>
      </Paper>
      <Paper elevation={0}>
        <CardContent>
          <Link rel="noopener" to={{ pathname: "https://nbviewer.jupyter.org/github/adhyttungga/Credit_Card_Data-Clustering/blob/main/ccdata_Clustering.ipynb"}} target="_blank">
            <Typography variant="h3" component="p">
              credit card data clustering
            </Typography>
          </Link>
        </CardContent>
        <CardMedia component="img" image={ccdataClustering}/>
      </Paper>
      <Paper elevation={0}>
        <CardContent>
          <Link rel="noopener" to={{ pathname: "https://nbviewer.jupyter.org/github/adhyttungga/Bank-Loan-Clustering/blob/master/bankLoanCluster.ipynb"}} target="_blank">
            <Typography variant="h3" component="p">
              bank loan clustering
            </Typography>
          </Link>
        </CardContent>
        <CardMedia component="img" image={loanClustering}/>
      </Paper>
      <Paper elevation={0}>
        <CardContent>
          <Link rel="noopener" to={{ pathname: "https://nbviewer.jupyter.org/github/adhyttungga/Loan-Classification/blob/master/loanPred.ipynb"}} target="_blank">
            <Typography variant="h3" component="p">
              loan classification
            </Typography>
          </Link>
        </CardContent>
        <CardMedia component="img" image={loanClassification}/>
      </Paper>
      <Paper elevation={0}>
        <CardContent>
          <Link rel="noopener" to={{ pathname: "https://nbviewer.jupyter.org/github/adhyttungga/rockpaperscissors-Classification/blob/master/rpsClassification.ipynb"}} target="_blank">
            <Typography variant="h3" component="p">
              rock-paper-scissors image classification
            </Typography>
          </Link>
        </CardContent>
        <CardMedia component="img" image={rpsClassification}/>
      </Paper>
    </Paper>
  )
}