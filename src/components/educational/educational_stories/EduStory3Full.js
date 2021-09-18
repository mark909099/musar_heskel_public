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
        השופט החכם
      </Typography>
    </Breadcrumbs>
    </Box>
</div>

<Grid container>

<Grid item xs={12}>
<Typography className={classes.head}>
השופט החכם
</Typography>
</Grid>

<Grid item xs={12}>
    <Box className={classes.picture_box}>
    <CardMedia className={classes.picture}
     image="/images/edu_stories/fly1.jpg">

    </CardMedia>
    </Box>
</Grid>

<Grid item item xs={12} sm={10} md={9}>
<Typography className={classes.body}>


<Typography className={classes.paragraph} paragraph='true'>
היו היה אדם זקן שחי לו בכפר. הזקן לא אהב את השכן הצעיר שלו, ולכן הפיץ שמועות שאומרות, "השכן שלי הוא גנב..."
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
יום אחד התרחשה גניבה באותו הכפר ובגלל השמועה כל האנשים האשימו את האדם הצעיר, וכתוצאה מכך הוא נעצר.
</Typography>


<Typography className={classes.paragraph} paragraph='true'>
כמה ימים לאחר חקירה התגלה שהאדם הצעיר חף מפשע,  הוא שוחרר מחזקת המשטרה. האדם הצעיר הרגיש מושפל בעודו הולך חזרה לביתו. הוא החליט לתבוע את הזקן והגיש תלונה לבית המשפט על האשמות שקריות לגביו.
ביום המשפט, השופט שאל את הזקן לגבי העובדה שהאשים את האדם הצעיר והפיץ עליו שמועה.
הזקן ענה, "אלה היו בסך הכול הערות.. זה לא פגע באף אחד..."
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
לפני החלטת השופט לגבי המקרה, השופט פנה לזקן ואמר לו: "היום לפני שאתה עוזב את בית המשפט, כתוב את כל הדברים שאמרת על האדם הצעיר על גבי חתיכת נייר ותחתוך את הדף לחתיכות קטנות.
קח את החתיכות הקטנות האלה אתך ובדרכך הביתה תזרוק את חתיכות הנייר האלה החוצה. מחר תגיע לבית המשפט כדי לשמוע את גזר הדין..."
הזקן עזב ועשה את מה שהשופט ביקש ממנו לעשות.
</Typography>

<Typography className={classes.paragraph} paragraph='true'>
ביום למחרת השופט אמר לזקן, "לפני שאתה מקבל עונש אני רוצה שתעשה עוד דבר אחד..."
הזקן שאל, "מה עליי לעשות?"
השופט ענה, "עליך ללכת החוצה ולאסוף את כל חתיכות הנייר שזרקת אתמול החוצה."
הזקן היה בהלם וענה, "אני לא יכול לעשות זאת.. הרוח פיזרה אותן ואני לא אוכל למצוא אותן יותר..."
השופט הסתכל על הזקן וענה, "בדיוק כך, באותה המידה, כאשר אתה מעביר הערה שלילית לגבי מישהו, אתה יכול להרוס את התדמית של אותו אדם עד כדי כך שלא ניתן לתקן זאת..."
הזקן הבין את הטעות שעשה וביקש סליחה מהאדם הצעיר.
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
מוסר השכל: אל תאשים מישהו לפני ידיעת העובדות או האמת, המילים שלך יכולות להרוס את התדמית שלו בלי שום אשמה מצדו.. או אפילו להרוס את חייו.
</Typography>
</Box>
</Grid>

</Grid>

</div>
    )
};