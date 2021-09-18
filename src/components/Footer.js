import React from 'react';
import { Grid, Button, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        direction:'rtl',
    },
    container: {
        paddingTop:'1.1rem',
        paddingBottom:'1rem',
        backgroundColor:'#8e9aaf',
        borderTop:'1px solid',
        borderTopColor:'#14213d',
    },
    grid_item: {
        textAlign:'center',
    },
    grid_button: {
        fontFamily:'Arial',
        fontSize:'1.35rem',
        fontWeight:'bold',
    },
    signature: {
        color:'#fff1e6',
        textAlign:'center',
        paddingTop:'1rem',
    },
}));

export default function Bottom1() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
        <Grid container className={classes.container}
        direction="row"
        justify="center"
        alignItems="center"
        item="true"
        >
        
    
        <Grid item xs={12} md={4} className={classes.grid_item}>
            <Button className={classes.grid_button} href="/about">
            אודות
            </Button>
        </Grid>

        <Grid item xs={12} md={4} className={classes.grid_item}>
            <Button className={classes.grid_button} href="/contact">
            צור קשר
            </Button>
        </Grid>

        <Grid item xs={12} md={4} className={classes.grid_item}>
            <Button className={classes.grid_button} href="/terms_of_use">
            תנאי שימוש
            </Button>
        </Grid>


        <Hidden smDown>
        <Grid item xs={8}></Grid>
        </Hidden>

        <Grid item xs={12} md={4}>
            <Typography className={classes.signature}>
             Developed by Mark Lapin © 2021
            </Typography>
        </Grid>


        </Grid>
        </div>
    )
}