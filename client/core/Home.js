import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import profilePict from './../assets/images/profilePict.jpeg'
import DataScience from './../assets/images/DataScience.png'
import WebDev from './../assets/images/WebDevelopment.jpg'

const useStyles = makeStyles(theme => ({
    paper: {
        position: "relative",
        maxWidth: 1000,
        margin: `${theme.spacing(10)}px auto`
    },
    grid: {
        padding: "0 40px"
    },
    title: {
        position: "absolute",
        left: 40, top: "70%",
        maxWidth: 1000,
        zIndex: 1,
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.primary.dark,
        "&:hover": {
            backgroundColor: theme.palette.protectedTitle,
            transition: "0.8s ease",
            borderRadius: `${25}px ${0} ${0}`
        }
    },
    media: {
        // position: "relative",
        maxWidth: "60%"
    },
    workMedia: {
        width: "100%"
    },
    container: {
        position: "relative"
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
    return (
        <div>
            <Paper elevation={0} className={classes.paper}>
                <Grid container direction="row" justify="flex-end" className={classes.grid}>
                    <CardContent>
                        <Typography variant="h4" component="p" align="right" className={classes.title}>
                            Hi, I am Adhytia.<br/>
                            A Data Scientist & Web Developer.<br/>
                            Welcome to my portfolio!
                        </Typography>
                    </CardContent>
                    <CardMedia component="img" className={classes.media} image={profilePict} title="Profile Picture"/>
                </Grid>
            </Paper>
            <Paper elevation={0} className={classes.container}>
                <CardMedia component="img" className={classes.workMedia} image={DataScience} title="Data Science"/>
                <CardMedia component="div" className={classes.overlay}/>
            </Paper>
            <Paper elevation={0} className={classes.container}>
                <CardMedia component="img" className={classes.workMedia} image={WebDev} title="Web Developement"/>
                <CardMedia component="div" className={classes.overlay}/>
            </Paper>
            <Paper elevation={0} className={classes.paper}>
                <CardContent> 
                    <Typography variant="h3" component="p" align="center">
                        Check out my <a>resume</a> for more→
                    </Typography>
                    <Typography variant="h3" component="p" align="center">
                        Feel free to chat <a>adhyttungga.jkt@gmail.com</a>
                    </Typography>
                </CardContent>
            </Paper>
        </div>
    )
}