import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Navbar from './../Navbar';
import Footer from './../Footer';
import BackToHomePage from './BackToHomePage';

const useStyles = makeStyles((theme) => ({
    text: {
        fontFamily:'Arial',
        direction:'rtl',
        paddingTop:'1rem',
        paddingBottom:'1rem',
    },
    text_2: {
        fontFamily:'Arial',
        direction:'rtl',
    },
}))

export default function StoryThankYou() {
    const classes = useStyles();
    return (
<div style={{height:'100vh'}}>
<Navbar />
<Typography className={classes.text}
variant='h2'
align='center'
>
סיפורך התקבל, תודה רבה !
</Typography>

<Typography className={classes.text_2}
variant='h5'
align='center'
>
נבדוק שהכל בסדר, ונוסיף את הסיפור.
</Typography>

<BackToHomePage />
</div>

    )
}
