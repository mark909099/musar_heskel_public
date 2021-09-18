import React from 'react';
import { Box, Grid, Breadcrumbs, Link, Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './../../Navbar';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'1.1rem',
        direction:'rtl'
    },
    up_brd: {
        paddingTop:'0.9rem',
        paddingBottom:'0.9rem',
        paddingRight:'1.5rem',
        backgroundColor:'#adb5bd',
        borderTop:'2px solid black',
        borderBottom:'2px solid black',
    },
    brd: {
        fontSize:'1.2rem',
        fontFamily:'Arial',
        fontStyle:'italic',
    },
    head: {
        fontSize:'2.5rem',
        fontFamily:'Arial',
        textDecoration:'underline',
        textUnderlinePosition:'under',
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        paddingBottom:'1.1rem',
    },
    picture_box: {
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        paddingBottom:'1rem',
    },
    picture: {
        height:'200px',
        width:'300px',
        borderRadius:'20px',
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
    },
    body: {
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        paddingBottom:'3rem',
    },
    paragraph: {
        fontSize:'1.25rem',
        fotnFamily:'Arial',
    },
    conclusion: {
        fontSize:'1.6rem',
        fotnFamily:'Arial',
        fontWeight:'bold',
        paddingRight:'1.5rem',
        paddingLeft:'1.5rem',
        paddingBottom:'0.5rem',
        border:'5px solid black',
        backgroundColor:'#adb5bd',
    },
}));


export default function EduStory3Full() {
    const classes = useStyles();
    return (
<div className={classes.root}>
<Navbar />
<div className={classes.up_brd}>
<Box>
        <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.brd}>
        דף הבית
      </Link>
      <Link color="inherit" href="/inspirational_stories" className={classes.brd}>
        מעורר השראה
      </Link>
      <Typography color="textPrimary" className={classes.brd}>
      הבדיחה
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>


<Grid item xs={12}>
<Typography className={classes.head}>
הבדיחה
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/ins_stories/joke1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>
היו היה אדם חכם שאנשים מכל רחבי תבל היו מבקרים אצלו לקבלת עצה לחיים. 
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
חלק מהאנשים היו מגיעים ומתלוננים על אותן הבעיות שוב ושוב.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
יום אחד, הוא החליט לספר להם בדיחה וכולם צחקו בקול גדול. 
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
אחרי כמה דקות הוא סיפר להם את אותה הבדיחה ורק מעטים מהם חייכו.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
ואז הוא סיפר את אותה בדיחה בפעם השלישית, אבל איש כבר לא צחק או חייך.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
האיש החכם חייך ואמר: "אתם לא יכולים לצחוק מאותה בדיחה שוב ושוב. אז למה אתם תמיד בוכים על אותן הבעיות?"
</Typography>

</Typography>
</Grid>

<Grid item xs={0} sm={2} md={3}>
    
</Grid>

<Grid item>
    <Box
    pl={3}
    pr={3}
    pb={2}>
<Typography className={classes.conclusion}>  
מוסר השכל: אל תבזבז את הזמן שלך בלהתלונן על אותו הדבר שוב ושוב.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};