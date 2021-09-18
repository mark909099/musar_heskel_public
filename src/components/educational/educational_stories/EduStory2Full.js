import React from 'react';
import Navbar from './../../Navbar';
import { Box, Grid, Breadcrumbs, Link, Typography, Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

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
        paddingBottom:'2rem',
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
        דאג לעצמך
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>

<Grid item xs={12}>
<Typography className={classes.head}>
דאג לעצמך
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/edu_stories/danger1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>
היו היה סוחר שעזב את העיר שלו למדינה אחרת בשביל לסחור. הוא שט בספינה עמוסה בארגזים מלאים בזהב ודברי יוקרה.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
בדרכו, סופה גדולה החלה בים. הספינה התחילה להתנדנד מצד לצד, ולאחר כמה שעות נוצר חור בתחתית הספינה.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
מים החלו להיכנס אל תוך הספינה. הסוחר עלה על גג הספינה והתחיל להתפלל. בתוך זמן קצר, הגיעה סירת דייגים שראו את הספינה הטובעת, ואמרו לסוחר: "קפוץ פנימה ונביא אותך למקום מבטחים." הסוחר ענה:" לא תודה, התפללתי לאלוהים ואני בטוח שהוא יציל אותי ואת הספינה שלי."
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
מאוחר יותר הגיעה ספינת סוחרים שעברה באזור על מנת לעזור לסוחר, אך שוב פעם הסוחר דחה אותם בגלל שהיה בטוח שאלוהים יציל אותו.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
לבסוף, כשכבר הספינה כמעט וטבעה, והסוחר כבר נרטב ממי הים, הגיעה ספינת הצלה וממנה נזרק חבל הצלה לסוחר, "בקרוב המים יהיו מעל הראש שלך. תפוס את החבל ואנחנו נביא אותך לחוף מבטחים", צעקו לו אנשי ההצלה. ושוב פעם, הסוחר התנגד לעזרה. בתוך זמן קצר, זרמי המים היו חזקים מדי והסוחר טבע.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
כאשר הגיע הסוחר לגן עדן הוא דרש לדבר עם אלוהים ושאל אותו, "למה אני מת כשאני התפללתי אליך שתציל אותי?!"
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
אלוהים הסתכל עליו למספר רגעים, וענה בפשטות, "אני שלחתי אליך ספינת דייגים, ספינת סוחרים וספינת הצלה. 
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
מה עוד רציתה ממני?"
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
מוסר השכל: אלוהים עוזר לאלה שעוזרים לעצמם.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};