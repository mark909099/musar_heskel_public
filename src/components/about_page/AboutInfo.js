import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        direction:'rtl',
        height:'100vh',
        padding:'2rem',
        backgroundImage:'url(/images/bg2.jpg)',
        backgroundSize:'cover',
        backgroundRepeat:'no-repeat',
    },
    head: {
        textDecoration:'underline',
        textUnderlinePosition:'under',
        fontFamily:'Arial',
        paddingBottom:'1.4rem',
    },
    paragraph1:{
        fontFamily:'Arial',
        fontSize:'1.2rem'
        },
    paragraph2: {
        fontFamily:'Arial',
        fontSize:'1.2rem',
    },
    paragraph3: {
        fontFamily:'Arial',
        fontSize:'1.5rem',
    }
}));


export default function AboutInfo() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
        <Typography className={classes.head}
        variant="h4">מוסר השכל - סיפורים לחיים</Typography>
        <Typography className={classes.paragraph1} paragraph="true">
        אתר זה נועד על מנת לשתף וללמוד מסיפורים קצרים בעלי משמעות.
        </Typography>

        <Typography className={classes.paragraph2} paragraph="true">
        נושאים שונים קיימים באתר, הנכם מוזמנים לחקור ולגלות את שלל הסיפורים, ואפילו להוסיף אחד משלכם!
        </Typography>

        <Typography className={classes.paragraph3} paragraph="true">
            תהנו.
        </Typography>
        </div>
    )
};