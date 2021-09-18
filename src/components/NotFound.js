import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Box} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        direction: 'rtl',
        height:'100vh',
        padding:'2rem',
        backgroundColor:'#e9ecef',
    },
    text: {

    }
}));

const NotFound = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box display="flex" justifyContent="center">
                <Typography variant="h4">אופס... כתובת זו לא קיימת</Typography>
            </Box>
            <Box display="flex" justifyContent="center" pt={5}>
            <Button className={classes.text} variant="outlined" href="/">חזרה לדף הבית</Button>
            </Box>
        </div>
    )
}

export default NotFound
