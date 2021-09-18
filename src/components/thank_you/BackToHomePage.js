import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        fontFamily:'Arial',
        direction:'rtl',
        paddingTop:'3rem',
        display:'flex',
        justifyContent:'center'
    },
}))
export default function BackToHomePage() {
    const classes =useStyles();
    return (
        <div className={classes.btn}>
           <Button
           href="/"
           variant='outlined'
           >דף הבית</Button> 
        </div>
    )
}
