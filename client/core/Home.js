import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grow from '@material-ui/core/Grow'
import Slide from '@material-ui/core/Slide'
import Typography from '@material-ui/core/Typography'
import { useScrollTrigger } from '@material-ui/core'
import ButtonMailto from './ButtonMailto'
import profilePict from './../assets/images/profilePict.jpeg'
import DataScience from './../assets/images/DataScience.png'
import WebDev from './../assets/images/WebDevelopment.jpg'
import { Link } from 'react-router-dom'

const useStyles = makeStyles(theme => ({
    Paper: {
        overflow: "auto",
        position: "relative",
        maxWidth: 1000,
        margin: `${theme.spacing(10)}px auto`,
        '@media (max-width: 600px)': {
            padding: `${theme.spacing(0)}px ${theme.spacing(1.5)}px`
        }
    },
    title: {
        position: "absolute",
        left: 40, bottom: 20,
        float: "left",
        padding: `${theme.spacing(3)}px ${theme.spacing(1.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.protectedTitle,
        '@media (max-width: 600px)': {
            position: "relative",
            left: 0, bottom:0,
            width: "100%",
            padding: `${theme.spacing(3)}px 0 ${theme.spacing(2)}px`,
        }
    },
    media: {
        width: "60%",
        float: "right",
        '@media (max-width: 600px)': {
            width: "100%"
        }
    },
    wrapper: {
        display: "flex",
        flexFlow: "column"
    },
    work: {
        margin: `${theme.spacing(2)}px 0`
    },
    relative: {
        position: "relative"
    },
    loaded: {
        width: "100%"
    },
    overlay: {
        position: "absolute",
        top: 0, 
        left: 0,
        padding: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        transition: "0.8s ease",
        opacity: 0,
        "&:hover": {
            opacity: "0.5"
        }
    }
}))

export default function Home() {
    const classes = useStyles()
    const [visible, setVisible] = React.useState({
        itemOne: false
    })
    const trigger = useScrollTrigger({
        disableHysteresis: true, 
        threshold: 100
    })
    const props = { classes, trigger }

    React.useEffect(() => {
        setVisible(state => ({...state, itemOne: true}))
    }, [])
    
    return (
        <div>
            <Grow in={visible.itemOne}
                style={{ transformOrigin: 'bottom' }} 
                {...(visible ? { timeout: 1000 } : {})}
            >
                <Paper elevation={0} className={classes.Paper}>
                    <CardContent className={classes.title}>
                        <Typography variant="h3" component="p" align="right">
                            Hi, I am Adhytia.<br/>
                            A Data Scientist & Web Developer.<br/>
                            Welcome to my portfolio!
                        </Typography>
                    </CardContent>
                    <CardMedia component="img" className={classes.media} image={profilePict} title="Profile Picture"/>
                </Paper>
            </Grow>
            <Paper elevation={0} className={classes.wrapper}>
                <Work {...props}/>
                <Resume {...props}/>
            </Paper>
        </div>
    )
}

const Work = (props) => {
    return (
        <Slide direction="up"
            in={props.trigger}
            {...(props.trigger ? { timeout: 1000 } : {})}
        >
            <Paper elevation={0} className={props.classes.work}>
                <Link to="/data-science">
                    <Paper elevation={0} className={props.classes.relative}>
                        <CardMedia component="img" className={props.classes.loaded} image={DataScience} title="Data Science"/>
                        <CardMedia component="div" className={props.classes.overlay}/>
                    </Paper>
                </Link>
                <Link to="/web-development">
                    <Paper elevation={0} className={props.classes.relative}>
                        <CardMedia component="img" className={props.classes.loaded} image={WebDev} title="Web Developement"/>
                        <CardMedia component="div" className={props.classes.overlay}/>
                    </Paper>
                </Link>
            </Paper>
        </Slide>
    )
}

const Resume = (props) => {
    return (
        <Grow in={props.trigger}
            style={{ transformOrigin: '50% 50%' }} 
            {...(props.trigger ? { timeout: 1000 } : {})}
            >
            <Paper elevation={0} className={props.classes.Paper}>
                <CardContent> 
                    <Typography variant="h6" component="p" align="center">
                        Check out my <Link to="/resume">resume</Link> for more→
                    </Typography>
                    <Typography variant="h6" component="p" align="center">
                        Feel free to chat <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
                    </Typography>
                </CardContent>
            </Paper>
        </Grow>
    )
}
