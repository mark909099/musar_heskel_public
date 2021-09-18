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


export default function EduStory4Full() {
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
      כוס מים
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>


<Grid item xs={12}>
<Typography className={classes.head}>
כוס מים
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/ins_stories/hold_glass_water1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>
באחד השיעורים פרופסורית לפסיכולוגיה הסתובבה על הבמה תוך שהיא מלמדת עקרונות לניהול לחץ באודיטוריום מלא בסטודנטים. כשהרימה כוס מים, כולם ציפו שתשאל אותם את השאלה האופיינית של "חצי כוס ריקה או חצי כוס מלאה". במקום זאת, עם חיוך על פניה, שאלה הפרופסורית, "עד כמה כוס כבדה כוס המים שאני מחזיקה?".
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
התלמידים צעקו תשובות שונות שנעו בין גרמים בודדים לחצי קילו.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
הפרופסורית ענתה, "מנקודת המבט שלי, המשקל המוחלט של הכוס הזו לא משנה. הכול תלוי בכמה זמן אני מחזיקה אותה. אם אני מחזיקה אותה דקה או שתיים, זה קל למדי. אם אחזיק אותה שעה רצופה, משקלה עשוי לגרום ליד שלי לכאוב קצת. אם אחזיק אותה יום רצוף, סביר להניח שזרועי תתכווץ ותרגיש חסרת תחושה ומשותקת לחלוטין, ותאלץ אותי להפיל את הכוס לרצפה. בכל מקרה, משקל הכוס אינו משתנה, אך ככל שאני מחזיק אותה זמן רב יותר, זה מרגיש לי כבד יותר."
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
בזמן שהסטודנטים נענעו את ראשיהם בהסכמה, היא המשיכה, "הלחצים והדאגות שלכם בחיים דומים מאוד לכוס המים הזו. תחשבו עליהם לזמן מה ושום דבר לא קורה. תחשבו עליהם עוד קצת ויתחיל לכאוב קצת. תחשבו עליהם כל היום, ותרגישו משותקים לחלוטין, לא מסוגלים לעשות שום דבר אחר עד שתפילו אותם."
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
מוסר השכל: אל תיתן לדאגות שלך לשתק אותך. 
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};