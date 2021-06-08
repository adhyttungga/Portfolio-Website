import React from 'react'
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Slide from '@material-ui/core/Slide'
import { makeStyles } from '@material-ui/core/styles'
import Profile from './../assets/images/resume.jpg'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.primary.main,
  },
  Paper: {
    backgroundColor: theme.palette.primary.main,
    "& > *": {
      backgroundColor: theme.palette.primary.main
    }
  },
  title: {
    margin: `${theme.spacing(5)}px 0`
  },
  tag: {
    color: theme.palette.secondary.dark,
    fontWeight: "bold"
  },
  flex: {
    display: "flex",
    "@media (max-width: 600px)": {
      flexWrap: "wrap"
    }
  },
  left: {
    width: "40%",
    "@media (max-width: 600px)": {
      width: "100%"
    }
  },
  right: {
    width: "60%",
    "@media (max-width: 600px)": {
      width: "100%"
    }
  },
  loaded: {
    width: "40%",
    padding: 16,
    paddingBottom: 24,
    "@media (max-width: 600px)": {
      width: "50%"
    }
  },
  certificates: {
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(2),
      width: "100%",
      height: theme.spacing(10),
      "@media (min-width: 600px)": {
        width: "25%",
      }
    }
  },
  link: {
    color: theme.palette.secondary.dark,
    "& > *": {
      textAlign: "center"
    }
  }
}))

export default function Resume() {
  const classes = useStyles()

  var obj = {}
  for ( var i = 1; i < 14; i++ ) {
    obj[`item${i}`] = false
  }
  
  const [show, setShow] = React.useState(obj)

  const props = { classes, show }

  var refObj = {}
  for ( var i = 1; i < 11; i++ ) {
    refObj[`ref_${i}`] = React.useRef(null)
  }

  React.useEffect(() => {
    window.scrollTo(0, 0)

    setShow(state => ({ ...state, item11: true}))
    setShow(state => ({ ...state, item12: true}))
    setShow(state => ({ ...state, item13: true}))

    const topPos = (e) => e.getBoundingClientRect().top

    var divPos = {}
    for ( var key in refObj ) {
      if (refObj.hasOwnProperty(key)) {
        divPos[`pos_${key}`] = Math.round(topPos(refObj[key].current))
      }
    }
    // console.log(divPos)

    const onScroll = () => {
      const scrollPos = window.scrollY + .9 * window.innerHeight
      if (divPos.pos_ref_1 < scrollPos) {
        setShow(state => ({ ...state, item1: true }))
      } else if (divPos.pos_ref_2 < scrollPos) {
        setShow(state => ({ ...state, item2: true }))
      } else if (divPos.pos_ref_3 < scrollPos) {
        setShow(state => ({ ...state, item3: true }))
      } else if (divPos.pos_ref_4 < scrollPos) {
        setShow(state => ({ ...state, item4: true }))
      } else if (divPos.pos_ref_5 < scrollPos) {
        setShow(state => ({ ...state, item5: true }))
      } else if (divPos.pos_ref_6 < scrollPos) {
        setShow(state => ({ ...state, item6: true }))
      } else if (divPos.pos_ref_7 < scrollPos) {
        setShow(state => ({ ...state, item7: true }))
      } else if (divPos.pos_ref_8 < scrollPos) {
        setShow(state => ({ ...state, item8: true }))
      } else if (divPos.pos_ref_9 < scrollPos) {
        setShow(state => ({ ...state, item9: true }))
      } else if (divPos.pos_ref_10 < scrollPos) {
        setShow(state => ({ ...state, item10: true }))
      }
      // console.log(divPos.pos_ref_6, divPos.pos_ref_7, divPos.pos_ref_8, divPos.pos_ref_9, divPos.pos_ref_10, scrollPos)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <Paper elevation={0} className={classes.root}>
      <PersonalData {...props} ref={refObj}/>
      <Slide 
        in={show.item10}
        direction="right"
        {...(show.item10 ? { timeout: 1000 } : {})}
      >
        <Paper elevation={0} ref={refObj.ref_10} className={classes.Paper}>
          <Typography variant="h2" component="p" className={classes.title}>
            → education
          </Typography>
        </Paper>
      </Slide>
      <Slide 
        in={show.item9}
        direction="right"
        {...(show.item9 ? { timeout: 1000 } : {})}
      >
        <CardContent className={classes.Education} ref={refObj.ref_9}>
          <Typography variant="body1" className={props.classes.tag} component="p">
            Physics BS
          </Typography>
          <Typography variant="body2" component="p">
            2015~2019 @ State University of Jakarta
          </Typography>
        </CardContent>
      </Slide>
      <WorkExperience {...props} ref={refObj}/>
      <Certificates {...props} ref={refObj}/>
    </Paper>
  )
}

const PersonalData = React.forwardRef((props, ref) => {
  return (
      <Paper elevation={0} className={props.classes.Paper}>
        <Slide 
        in={props.show.item13}
        direction="right"
        {...(props.show.item13 ? { timeout: 1000 } : {})}
        >
          <Paper elevation={0}>
            <Typography variant="h2" component="p" className={props.classes.title}>
              → resume
            </Typography>
          </Paper>
        </Slide>
        <Slide 
        in={props.show.item12}
        direction="right"
        {...(props.show.item12 ? { timeout: 1250 } : {})}
        >
          <div className={props.classes.flex}>
            <CardMedia component="img" className={props.classes.loaded} image={Profile}/>
            <CardContent className={props.classes.right}>
              <Typography variant="body2" className={props.classes.tag} component="p">
                Location
              </Typography>
              <Typography variant="body1" component="p">
                Jakarta, Indonesia
              </Typography>
              <Typography variant="body1" component="p">
                <br/>
              </Typography>
              <Typography variant="body2" className={props.classes.tag} component="p">
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
        </Slide>
        <Slide 
          in={props.show.item11}
          direction="right"
          {...(props.show.item11 ? { timeout: 1500 } : {})}
        >
          <div className={props.classes.flex}>
            <CardContent className={props.classes.left}>
              <Typography variant="body2" className={props.classes.tag} component="p">
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
                HTML/CSS/Javascript/PHP/NodeJs
              </Typography>
              <Typography variant="body1" component="p">
                JQuery/ReactJS
              </Typography>
              <Typography variant="body1" component="p">
                Git
              </Typography>
            </CardContent>
            <CardContent className={props.classes.right}>
            <Typography variant="body1" component="p">
              Bachelor of Science degree holder with major in physics and specialized in computational and instrumentation.
            </Typography>
            <Typography variant="body1" component="p">
              <br/>
            </Typography>
            <Typography variant="body1" component="p">
              Eager to apply academic and professional background towards launching a successful career as Web Developer or Data Scientist. 
              Experience with object-oriented programming, developing-testing code, designing interface, interpreting and analyzing data. 
              Proficient knowledge in statistics, mathematics, and analytics. 
            </Typography>
            <Typography variant="body1" component="p">
              <br/>
            </Typography>
            <Typography variant="body1" component="p">
              Excellent understanding of analytics tools for effective analyses of data.
              Quickly learn and master new technology, eager for working in both team and self-directed settings.
            </Typography>
          </CardContent>
          </div>
        </Slide>
      </Paper>
  )
})

const WorkExperience = React.forwardRef((props, ref) => {
  return (
    <Paper elevation={0} className={props.classes.Paper}>
      <Slide 
        in={props.show.item8}
        direction="right"
        {...(props.show.item8 ? { timeout: 1000 } : {})}
      >
        <div ref={ref.ref_8}>
            <Typography variant="h2" component="p" className={props.classes.title}>
            → work experience
          </Typography>
        </div>
      </Slide>
      <Slide 
        in={props.show.item7}
        direction="right"
        {...(props.show.item7 ? { timeout: 1000 } : {})}
      >
        <div className={props.classes.flex} ref={ref.ref_7}>
          <CardContent className={props.classes.left}>
            <Typography variant="body1" className={props.classes.tag} component="p">
              Part Time
            </Typography>
            <Typography variant="body2" component="p">
              Jakarta, Indonesia
            </Typography>
          </CardContent>
          <CardContent className={props.classes.right}>
            <Typography variant="body2" component="p">
              → <strong>Physics and Mathematics Teacher</strong> · 2015~Present
            </Typography>
            <Typography variant="body2" component="p">
              Teaching as private and “bimbingan belajar” teacher.
            </Typography>
          </CardContent>
        </div>
      </Slide>
      <Slide 
        in={props.show.item6}
        direction="right"
        {...(props.show.item6 ? { timeout: 1000 } : {})}
      >
        <div className={props.classes.flex} ref={ref.ref_6}>
          <CardContent className={props.classes.left}>
            <Typography variant="body1" className={props.classes.tag} component="p">
              Garuda Indonesia
            </Typography>
            <Typography variant="body2" component="p">
              Banten, Indonesia
            </Typography>
          </CardContent>
          <CardContent className={props.classes.right}>
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
      </Slide>
      <Slide 
        in={props.show.item5}
        direction="right"
        {...(props.show.item5 ? { timeout: 1000 } : {})}
      >
        <div className={props.classes.flex} ref={ref.ref_5}>
          <CardContent className={props.classes.left}>
            <Typography variant="body1" className={props.classes.tag} component="p">
            SBMPTN Jakarta Local Committee (Volunteer)
            </Typography>
            <Typography variant="body2" component="p">
              Jakarta, Indonesia
            </Typography>
          </CardContent>
          <CardContent className={props.classes.right}>
            <Typography variant="body2" component="p">
              → <strong>Person in Charge of Exam Documents</strong> · Mei 2018
            </Typography>
            <Typography variant="body2" component="p">
              Responsible for distributing exam documents to the person in charge at the location in accordance with applicable regulations.
            </Typography>
          </CardContent>
        </div>
      </Slide>
      <Slide 
        in={props.show.item4}
        direction="right"
        {...(props.show.item4 ? { timeout: 1000 } : {})}
      >
        <div className={props.classes.flex} ref={ref.ref_4}>
          <CardContent className={props.classes.left}>
            <Typography variant="body1" className={props.classes.tag} component="p">
              State University of Jakarta
            </Typography>
            <Typography variant="body2" component="p">
              Jakarta, Indonesia
            </Typography>
          </CardContent>
          <CardContent className={props.classes.right}>
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
      </Slide>
      <Slide 
        in={props.show.item3}
        direction="right"
        {...(props.show.item3 ? { timeout: 1000 } : {})}
      >
        <div className={props.classes.flex} ref={ref.ref_3}>
          <CardContent className={props.classes.left}>
            <Typography variant="body1" className={props.classes.tag} component="p">
              Atri Pasifik
            </Typography>
            <Typography variant="body2" component="p">
              Banten, Indonesia
            </Typography>
          </CardContent>
          <CardContent className={props.classes.right}>
            <Typography variant="body2" component="p">
              → <strong>Picker</strong> · August 2014~October 2014
            </Typography>
            <Typography variant="body2" component="p">
              Collect requested product from its box and put in the container
            </Typography>
          </CardContent>
        </div>
      </Slide>
    </Paper>
  )
})

const Certificates = React.forwardRef((props, ref) => {
  return (
      <Paper elevation={0} className={props.classes.Paper}>
        <Slide 
        in={props.show.item2}
        direction="right"
        {...(props.show.item2 ? { timeout: 1000 } : {})}
        >
          <Paper elevation={0}>
            <Typography variant="h2" component="p" className={props.classes.title} ref={ref.ref_2}>
              → certificates
            </Typography>
          </Paper>
        </Slide>
        <Slide 
        in={props.show.item1}
        direction="right"
        {...(props.show.item1 ? { timeout: 1000 } : {})}
        >
          <Paper elevation={0} className={props.classes.certificates} ref={ref.ref_1}>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.codepolitan.com/c/KLJP28D" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar Dasar-Dasar HTML dan CSS</em> (CODEPOLITAN)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.codepolitan.com/c/9LSJNXQ" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar JavaScript Dasar</em> (CODEPOLITAN)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.codepolitan.com/c/HF6RCYP" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar JQuery Dasar</em> (CODEPOLITAN)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/cap7_nemo/front-end-libraries" target="_blank">
                <Typography variant="body2" component="p">
                  Front End Libraries (freeCodeCamp)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.dicoding.com/certificates/53XEEOM1VXRN" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Memulai Pemrograman dengan Python</em> (dicoding)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.dicoding.com/certificates/JLX117K4JX72" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar Dasar Visualisasi Data</em> (dicoding)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.dicoding.com/certificates/07Z6L09GMPQR" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar Machine Learning untuk Pemula</em> (dicoding)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.freecodecamp.org/certification/cap7_nemo/data-analysis-with-python-v7" target="_blank">
                <Typography variant="body2" component="p">
                  Data Analysis with Python (freeCodeCamp)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/data-cleaning" target="_blank">
                <Typography variant="body2" component="p">
                  Data Cleaning (kaggle)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/data-visualization" target="_blank">
                <Typography variant="body2" component="p">
                  Data Visualization (kaggle)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.kaggle.com/learn/certification/adhytiatungga/intro-to-sql" target="_blank">
                <Typography variant="body2" component="p">
                  Intro to SQL (kaggle)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.codepolitan.com/c/VH9QL1S" target="_blank">
                <Typography variant="body2" component="p">
                  <em>Belajar MongoDB untuk Pemula</em> (CODEPOLITAN)
                </Typography>
              </a>
            </Paper>
            <Paper variant="outlined">
              <a className={props.classes.link} rel="noopener noreferrer" href="https://www.codepolitan.com/c/PZCJK01" target="_blank"> 
                <Typography variant="body2" component="p">
                  <em>Belajar GIT untuk Pemula</em> (CODEPOLITAN)
                </Typography>
              </a>
            </Paper>
          </Paper>
        </Slide>
      </Paper>
  )
})