import React from 'react'
import ReactDOM from 'react-dom'
import { makeStyles } from "@material-ui/core/styles"
import Paper from '@material-ui/core/Paper'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grow from '@material-ui/core/Grow'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'
import Work from './Work'
import ButtonMailto from './ButtonMailto'
import profilePict from './../assets/images/profilePict.jpeg'
import { useScrollTrigger } from '@material-ui/core'

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
            padding: `${theme.spacing(3)}px ${theme.spacing(0)}px ${theme.spacing(2)}px`,
        }
    },
    media: {
        width: "60%",
        float: "right",
        '@media (max-width: 600px)': {
            width: "100%"
        }
    }
}))

export default function Home(props) {
    const classes = useStyles()
    const [visible, setVisible] = React.useState({
        itemOne: false
    })

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
            <Work {...props}/>
            <Paper elevation={0} className={classes.Paper}>
                {props.children}
                <CardContent> 
                    <Typography variant="h6" component="p" align="center">
                        Check out my <Link to="/resume">resume</Link> for more→
                    </Typography>
                    <Typography variant="h6" component="p" align="center">
                        Feel free to chat <ButtonMailto mailto="mailto:adhyttungga.jkt@gmail.com" label="adhyttungga.jkt@gmail.com"/>
                    </Typography>
                </CardContent>
            </Paper>
        </div>
    )
}