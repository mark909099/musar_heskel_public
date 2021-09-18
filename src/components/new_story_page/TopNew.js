import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Typography 
        } from '@material-ui/core';
        
const useStyles = makeStyles((theme) => ({
    top_text: {
        paddingTop:'0.5rem',
        paddingBottom:'0.5rem',
        fontFamily:'Courier New',
        [theme.breakpoints.down('lg')]: {
          fontSize: '6.5rem',
        },
      
        [theme.breakpoints.down('md')]: {
        fontSize: '5rem',
        },
    
        [theme.breakpoints.down('sm')]: {
            fontSize: '3.5rem',
            },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            },
    }
}))

export default function TopNew() {
    const classes = useStyles();
    return (
<div>
<Typography className={classes.top_text}
align='center'
variant="h1"
>
הוסף סיפור משלך 
</Typography>    
</div>
    )
}
