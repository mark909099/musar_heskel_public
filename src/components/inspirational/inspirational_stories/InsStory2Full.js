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


export default function EduStory2Full() {
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
      הפרפר
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>


<Grid item xs={12}>
<Typography className={classes.head}>
הפרפר
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/ins_stories/butterfly1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>
אדם מצא פקעת של פרפר.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
יום אחד הופיעה פתיחה קטנה. הוא ישב והתבונן בפרפר במשך כמה שעות כשהוא נאבק בכוח לדחוף את גופו החוצה דרך החור הקטן הזה.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
עד שלפתע הפסיק להתקדם ונראה כאילו הוא תקוע.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
אז האדם החליט לעזור לפרפר. הוא לקח מספריים וגזר את מעט הפקעת שנותרה. כתוצאה מכך הפרפר הגיח בקלות, אם כי היה לו גוף נפוח וכנפיים קטנות ומצומקות.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
האיש לא חשב על כך כלום וישב שם וחיכה שהכנפיים יגדלו כדי לתמוך בפרפר. אבל זה לא קרה. הפרפר בילה את שארית חייו ללא יכולת לעוף, כשהוא זוחל, עם כנפיים זעירות וגוף נפוח. 
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
למרות טוב ליבו של האיש, הוא לא הבין כי הפקעת המגבילה והקושי הדרוש לפרפר בכדי להעביר את עצמו דרך הפתח הקטן, הייתה דרכו של הטבע לכפות על הנוזלים בגוף הפרפר לעבור לכנפיו, ולהכין את עצמו לטיסה ברגע שיצא מהפקעת.
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
מוסר השכל: הקשיים שלנו בחיים מפתחים את החוזקות שלנו. ללא קשיים, אנחנו אף פעם לא גדלים ולעולם לא מתחזקים, ולכן חשוב להתמודד עם אתגרים בעצמנו, ולא להסתמך על עזרה מאחרים.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};