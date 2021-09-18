import React from 'react';
import { Breadcrumbs, Typography, Link, Box } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop:'0.9rem',
        paddingBottom:'0.9rem',
        paddingRight:'1.5rem',
        backgroundColor:'#adb5bd',
        direction:'rtl'
        
    },
    brd: {
        fontSize:'1.2rem',
        fontFamily:'Arial',
        fontStyle:'italic',
    }
}));


export default function EduAllBrd() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box>
        <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" className={classes.brd}>
        דף הבית
      </Link>
      <Typography color="textPrimary" className={classes.brd}>
        לימודי
      </Typography>
    </Breadcrumbs>
    </Box>
    </div>
    )
}