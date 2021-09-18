import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Navbar from './Navbar';
import Footer from './Footer';

const useStyles = makeStyles((theme) => ({
    root: {
        direction: 'rtl',
        height:'100vh',
        padding:'2rem',
    },
    header: {
        fontSize:'2.5rem',
        fontFamily:'David',
        textDecoration:'underline',
        paddingBottom:'0.6rem',
    },
    paragraph: {
        fontSize:'1rem',
        fontFamily:'Arial',
        paddingBottom:'0.2rem',
    }
}));

export default function TermsOfUse() {
    const classes = useStyles();
    return (
        <div>
<Navbar />
        
        <div className={classes.root}>
            
            <Typography className={classes.header}>
            תנאי השימוש באתר
            </Typography>

            <Typography className={classes.paragraph}>
            
            1. השימוש באתר על תכניו והשירותים הניתנים בו, מוצעים לך בכפוף לקבלתך את כל התנאים הכלולים בתקנון זה.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            2. הגלישה באתר ייחשבו להסכמה מצדך לתנאים אלה.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            3. הנהלת האתר רשאית להשעות, לחסום או להפסיק לאלתר את גישת הגולש לשירות אם יפר את תנאי התקנון.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            4. הנהלת האתר רשאית לעדכן את תנאי התקנון מעת לעת.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            5. אין לעשות באתר או באמצעותו כל שימוש למטרות בלתי חוקיות.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            6. הנהלת האתר אינה אחראית לתוכן מודעות, "באנרים" או לכל חומר פרסומי באתר. האחריות לכך על המפרסמים בלבד.
            
            </Typography>

            <Typography className={classes.paragraph}>
            
            7. על התקנון יחול הדין הישראלי.
            
            </Typography>
        </div>
<Footer />
        </div>
    )
}