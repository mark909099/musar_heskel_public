import React from 'react';
import Navbar from './../../Navbar';
import { Box, Grid, Breadcrumbs, Link, Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'1.1rem',
        direction:'rtl',
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


export default function EduStory1Full() {
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
      <Link color="inherit" href="/educational_stories" className={classes.brd}>
        לימודי
      </Link>
      <Typography color="textPrimary" className={classes.brd}>
        חוק הטבע
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>


<Grid item xs={12}>
<Typography className={classes.head}>
חוק הטבע
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/edu_stories/river1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>

היו היה נהר שהיה מלא ביצורי ים. מידי פעם, הנהר היה מתייבש ולפעמים הנהר היה מלא במים. יצורי הים ידעו מתי תהיה בצורת ומתי ירדו גשמים.

</Typography>

<Typography className={classes.paragraph} paragraph='true'>
באחת השנים, הגיע זמן הבצורת, ויצורי הים עזבו את הנהר והלכו לשטחי מראה ירוקים יותר. אבל צב אחד לא עזב את הנהר. הוא אמר: "אני נולדתי כאן וההורים שלי גרו כאן, אז אני לא יכול לעזוב את הנהר הזה.", וכשהנהר התייבש, הצב קבר את עצמו בתוך החול.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>

לפתע הגיע קדר על מנת לקחת קצת חרס, החפירה שלו פגעה בצב, והצב בכה: "אאוצ'! עשיתי טעות בכך שנשארתי כאן. זה כבר לא מקום בטוח. זה חסר תועלת להידבק לדברים. צריך להתקדם בחיים." באומרו זאת, הוא ברח משם מהר ככל שיכל.

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
מוסר השכל: שינוי הוא חוק הטבע, ועלינו לקבל חוק זה.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};