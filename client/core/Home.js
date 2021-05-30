import React from 'react'
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { Link, withRouter } from 'react-router-dom'
import Work from './Work'
import ButtonMailto from './ButtonMailto'
import profilePict from './../assets/images/profilePict.jpeg'

const useStyles = makeStyles(theme => ({
    Paper: {
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
        padding: `${theme.spacing(3)}px ${theme.spacing(2.5)}px ${theme.spacing(2)}px`,
        color: theme.palette.protectedTitle
    },
    media: {
        maxWidth: "60%"
    }
}))

export default function Home() {
    const classes = useStyles()
    return (
        <div>
            <Paper elevation={0} className={classes.Paper}>
                <Grid container direction="row" justify="flex-end" className={classes.grid}>
                    <CardContent>
                        <Typography variant="h4" component="span" align="right" className={classes.title}>
                            Hi, I am Adhytia.<br/>
                            A Data Scientist & Web Developer.<br/>
                            Welcome to my portfolio!
                        </Typography>
                    </CardContent>
                    <CardMedia component="img" className={classes.media} image={profilePict} title="Profile Picture"/>
                </Grid>
            </Paper>
            <Work/>
            <Paper elevation={0} className={classes.Paper}>
                <CardContent> 
                    <Typography variant="h6" component="p" align="center">
                        Check out my <Link to="/resume" onClick={(e) => {e.preventDefault}}>resume</Link> for more→
                    </Typography>
                    <Typography variant="h6" component="p" align="center">
                        Feel free to chat <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
                    </Typography>
                </CardContent>
            </Paper>
        </div>
    )
}