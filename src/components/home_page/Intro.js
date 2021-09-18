import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    CardMedia,
    Typography,
    Box
} from '@material-ui/core';
import { Fade, Rotate, Zoom } from 'react-reveal';


const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('xs')]: {
            flexGrow: 1,
            direction:'rtl',
            textAlign: 'center',
            height: "80vh",
            backgroundImage: "url('/images/bg1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        },
        [theme.breakpoints.up('md')]: {
            flexGrow: 1,
            direction:'rtl',
            textAlign: 'center',
            height: "200vh",
            backgroundImage: "url('/images/bg1.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }
    }, 
    topPicture: {
        [theme.breakpoints.up('xs')]: {
            alignItems: 'center',
            height: 120,
            width: 120,
        },
        [theme.breakpoints.up('md')]: {
            alignItems: 'center',
            height: 200,
            width: 200,
        },
    },
    header: {
        fontFamily:'Times new roman',
        fontStyle:'italic',
        [theme.breakpoints.up('xs')]: {
            fontSize: '4rem',
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: '6.5rem',
        },  
        [theme.breakpoints.up('md')]: {
        fontSize: '8rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '10rem',
            }     
    },
    text: {
        fontWeight:'700',
        [theme.breakpoints.up('xs')]: {
            fontSize: '1.4rem',
            paddingTop:'0.5rem'
        },
        [theme.breakpoints.up('sm')]: {
          fontSize: '2.5rem',
          paddingTop:'7rem'
        },
        [theme.breakpoints.up('md')]: {
        fontSize: '4rem',
        paddingTop:'8rem'
        },
        [theme.breakpoints.up('lg')]: {
            fontSize: '5rem',
            }          
    },   
}));

export default function Intro() {
    const classes = useStyles();
    return (
<Fade duration={2000}>
<div className={classes.root}>
    <Grid container
    direction="column"
    justify="center"
    alignItems="center"
    >
        <Typography className={classes.header}>
            <Fade right cascade delay={1000} duration={2000}>
            מוסר השכל
            </Fade>
            </Typography>
        <Zoom duration={6000}>
        <Fade delay={2000} duration={4000}>
            <Box>
                <CardMedia
                className={classes.topPicture}
                image="/images/logo_main.png" />
            </Box>
        </Fade>
        </Zoom>
        
    <Typography className={classes.text} variant="h2">
        <Rotate bottom right cascade duration={3000} delay={3000}>
         סיפורים קצרים עם מחשבה על החיים 
        </Rotate> 
    </Typography>

    </Grid>
</div>
</Fade>
    )
};


