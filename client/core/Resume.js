import React from 'react'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import { a } from 'react-router-dom'
import Profile from './../assets/images/resume.jpg'
const useStyles = makeStyles(theme => ({
  root: {},
  flex: {
    display: "flex",
    "@media (max-width: 600px)": {
      flexWrap: "wrap"
    }
  },
  left: {
    width: "40%",
    border: "3px solid rgba(0,0,0,.2)",
    "@media (max-width: 600px)": {
      width: "100%"
    }
  },
  right: {
    width: "60%",
    border: "3px solid rgba(0,0,0,.2)",
    "@media (max-width: 600px)": {
      width: "100%"
    }
  },
  loaded: {
    width: "40%",
    border: "3px solid rgba(0,0,0,.2)",
    padding: 16,
    paddingBottom: 24
  }
}))

export default function Resume() {
  const classes = useStyles()
  return (
    <Paper elevation={0} className={classes.root}>
      <PersonalData {...classes}/>
      <Typography variant="h3" component="p">
        → education
      </Typography>
      <CardContent className={classes.Education}>
        <Typography variant="body1" component="p">
          Physics BS
        </Typography>
        <Typography variant="body2" component="p">
          2015~2019 @ State University of Jakarta
        </Typography>
      </CardContent>
      <WorkExperience {...classes}/>
      <Certificates {...classes}/>
    </Paper>
  )
}

const PersonalData = (classes) => {
  return (
      <Paper elevation={0}>
        <Typography variant="h3" component="p">
          → resume
        </Typography>
        <div className={classes.flex}>
          <CardMedia component="img" className={classes.loaded} image={Profile}/>
          <CardContent className={classes.right}>
            <Typography variant="body2" component="p">
              Location
            </Typography>
            <Typography variant="body1" component="p">
              Jakarta, Indonesia
            </Typography>
            <Typography variant="body1" component="p">
              <br/>
            </Typography>
            <Typography variant="body2" component="p">
              Contact
            </Typography>
            <Typography variant="body1" component="p">
              adhyttungga.jkt@gmail.com
            </Typography>
            <Typography variant="body1" component="p">
              +6281296883363
            </Typography>
          </CardContent>
        </div>
        <div className={classes.flex}>
          <CardContent className={classes.left}>
            <Typography variant="body2" component="p">
              Skills
            </Typography>
            <Typography variant="body1" component="p">
              Microsoft Excel
            </Typography>
            <Typography variant="body1" component="p">
              Statistics
            </Typography>
            <Typography variant="body1" component="p">
              Machine Learning
            </Typography>
            <Typography variant="body1" component="p">
              Data Visualization
            </Typography>
            <Typography variant="body1" component="p">
              MySQL/PostgreSQL/MongoDB
            </Typography>
            <Typography variant="body1" component="p">
              MATLAB/Python
            </Typography>
            <Typography variant="body1" component="p">
              Tensorflow/Keras
            </Typography>
            <Typography variant="body1" component="p">
              HTML/CSS/Javascript/PHP
            </Typography>
            <Typography variant="body1" component="p">
              JQuery/ReactJS
            </Typography>
            <Typography variant="body1" component="p">
              Git
            </Typography>
          </CardContent>
          <CardContent className={classes.right}>
          <Typography variant="body1" component="p">
            Bachelor of Science degree holder with major in physics and specialized in computational and instrumentation. 
            Eager to apply academic and professional background towards launching a successful career as Web Developer or Data Scientist. 
            Experience with object-oriented programming, developing-testing code, designing interface, interpreting and analyzing data. 
            Proficient knowledge in statistics, mathematics, and analytics. 
            Excellent understanding of analytics tools for effective analyses of data.
            Quickly learn and master new technology, eager for working in both team and self-directed settings.
          </Typography>
        </CardContent>
        </div>
      </Paper>
  )
}

const WorkExperience = (classes) => {
  return (
    <Paper elevation={0}>
      <Typography variant="h3" component="p">
        → work experience
      </Typography>
      <div className={classes.flex}>
        <CardContent className={classes.left}>
          <Typography variant="body1" component="p">
            Part Time
          </Typography>
          <Typography variant="body2" component="p">
            Jakarta, Indonesia
          </Typography>
        </CardContent>
        <CardContent className={classes.right}>
          <Typography variant="body2" component="p">
            → <strong>Physics and Mathematics Teacher</strong> · 2015~Present
          </Typography>
          <Typography variant="body2" component="p">
            Teaching as private and “bimbingan belajar” teacher.
          </Typography>
        </CardContent>
      </div>
      <div className={classes.flex}>
        <CardContent className={classes.left}>
          <Typography variant="body1" component="p">
            Garuda Indonesia
          </Typography>
          <Typography variant="body2" component="p">
            Banten, Indonesia
          </Typography>
        </CardContent>
        <CardContent className={classes.right}>
          <Typography variant="body2" component="p">
            → <strong>Internship at Unit Operation Planning and Control</strong> · August 2018
          </Typography>
          <Typography variant="body2" component="p">
            Familiarized with generating flight plan, dispatching aircraft, and analyzing weather to communicate with pilots regard the route, payload, and aircraft status.
          </Typography>
          <Typography variant="body2" component="p">
            Conducted research related to physics   for final assessment.
          </Typography>
        </CardContent>
      </div>
      <div className={classes.flex}>
        <CardContent className={classes.left}>
          <Typography variant="body1" component="p">
          SBMPTN Jakarta Local Committee (Volunteer)
          </Typography>
          <Typography variant="body2" component="p">
            Jakarta, Indonesia
          </Typography>
        </CardContent>
        <CardContent className={classes.right}>
          <Typography variant="body2" component="p">
            → <strong>Person in Charge of Exam Documents</strong> · Mei 2018
          </Typography>
          <Typography variant="body2" component="p">
            Responsible for distributing exam documents to the person in charge at the location in accordance with applicable regulations.
          </Typography>
        </CardContent>
      </div>
      <div className={classes.flex}>
        <CardContent className={classes.left}>
          <Typography variant="body1" component="p">
            State University of Jakarta
          </Typography>
          <Typography variant="body2" component="p">
            Jakarta, Indonesia
          </Typography>
        </CardContent>
        <CardContent className={classes.right}>
          <Typography variant="body2" component="p">
            → <strong>Laboratory Assistant of Laboratory Course Fundamental Physics 1</strong> · August 2017~February 2018
          </Typography>
          <Typography variant="body2" component="p">
            Conducted practicum guidance for students in accordance with the schedule and objectives.
          </Typography>
          <Typography variant="body2" component="p">
            Provided daily assessments (test, practicums, and reports) to students.
          </Typography>
          <Typography variant="body2" component="p">
            Oversee the implementation of the response and provide an assessment.
          </Typography>
          <Typography variant="body2" component="p">
            Coordinated with lecturers and laboratory technicians.
          </Typography>
        </CardContent>
      </div>
      <div className={classes.flex}>
        <CardContent className={classes.left}>
          <Typography variant="body1" component="p">
            Atri Pasifik
          </Typography>
          <Typography variant="body2" component="p">
            Banten, Indonesia
          </Typography>
        </CardContent>
        <CardContent className={classes.right}>
          <Typography variant="body2" component="p">
            → <strong>Picker</strong> · August 2014~October 2014
          </Typography>
          <Typography variant="body2" component="p">
            Collect requested product from its box and put in the container
          </Typography>
        </CardContent>
      </div>
    </Paper>
  )
}

const Certificates = (classes) => {
  return (
      <Paper elevation={0}>
        <Typography variant="h3" component="p">
          → certificates
        </Typography>
        <CardContent className={classes.Certificate}>
          <a rel="noopener noreferrer" href="https://www.codepolitan.com/c/KLJP28D" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar Dasar-Dasar HTML dan CSS</em> (CODEPOLITAN)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.codepolitan.com/c/9LSJNXQ" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar JavaScript Dasar</em> (CODEPOLITAN)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.codepolitan.com/c/HF6RCYP" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar JQuery Dasar</em> (CODEPOLITAN)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/cap7_nemo/front-end-libraries" target="_blank">
            <Typography variant="body2" component="p">
              Front End Libraries (freeCodeCamp)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.dicoding.com/certificates/53XEEOM1VXRN" target="_blank">
            <Typography variant="body2" component="p">
              <em>Memulai Pemrograman dengan Python</em> (dicoding)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.dicoding.com/certificates/JLX117K4JX72" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar Dasar Visualisasi Data</em> (dicoding)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.dicoding.com/certificates/07Z6L09GMPQR" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar Machine Learning untuk Pemula</em> (dicoding)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/cap7_nemo/data-analysis-with-python-v7" target="_blank">
            <Typography variant="body2" component="p">
              Data Analysis with Python (freeCodeCamp)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/data-cleaning" target="_blank">
            <Typography variant="body2" component="p">
              Data Cleaning (kaggle)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/data-visualization" target="_blank">
            <Typography variant="body2" component="p">
              Data Visualization (kaggle)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/intro-to-sql" target="_blank">
            <Typography variant="body2" component="p">
              Intro to SQL (kaggle)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.codepolitan.com/c/VH9QL1S" target="_blank">
            <Typography variant="body2" component="p">
              <em>Belajar MongoDB untuk Pemula</em> (CODEPOLITAN)
            </Typography>
          </a>
          <a rel="noopener noreferrer" href="https://www.codepolitan.com/c/PZCJK01" target="_blank"> 
            <Typography variant="body2" component="p">
              <em>Belajar GIT untuk Pemula</em> (CODEPOLITAN)
            </Typography>
          </a>
        </CardContent>
      </Paper>
  )
}