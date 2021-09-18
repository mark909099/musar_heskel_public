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
      <Link color="inherit" href="/inspirational_stories" className={classes.brd}>
        מעורר השראה
      </Link>
      <Typography color="textPrimary" className={classes.brd}>
        הפיל והחבל
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>


<Grid item xs={12}>
<Typography className={classes.head}>
הפיל והחבל
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/ins_stories/elephant1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item xs={12} sm={10} md={9}>
<Typography className={classes.body}>

<Typography className={classes.paragraph} paragraph='true'>
ג'נטלמן עבר במחנה פילים, והבחין שהפילים לא מוחזקים בכלובים או מוחזקים על ידי שימוש בשרשראות. כל מה שהחזיק אותם מלהימלט מהמחנה היה חבל קטן שקשור לאחת מרגליהן.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
כשהאיש התבונן בפילים, הוא היה מבולבל לחלוטין מפני שהוא לא הבין למה הפילים פשוט לא משתמשים בכוחם על מנת לקרוע את החבל ולברוח מהמחנה. הם יכלו לעשות זאת בקלות, אבל במקום זאת, הם לא ניסו בכלל.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
סקרן ורוצה לדעת את התשובה, הוא שאל את המאלף ליד למה הפילים פשוט עומדים שם ומעולם לא מנסים לברוח.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
המאלף ענה: " כשהם היו מאוד קטנים והרבה יותר קטנים השתמשנו בחבל באותו הגודל על מנת לקשור אותם, ובאותו הגיל זה מספיק כדי להחזיק אותם. כשהם גדלים, הם מאולפים להאמין שהם לא יכולים להתנתק מהחבל. הם מאמינים שהחבל עדיין יכול להחזיק אותם, ולכן הם אף פעם לא מנסים להשתחרר."
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
הסיבה היחידה שהפילים לא השתחררו ונמלטו מהמחנה הייתה שעם הזמן הם אימצו את האמונה שזה פשוט לא אפשרי.
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
מוסר השכל: לא משנה כמה העולם מנסה לעכב אותך, המשך תמיד באמונה שמה שאתה רוצה להשיג אפשרי. האמונה שאתה יכול להצליח היא הצעד החשוב ביותר להשיג זאת בפועל.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};