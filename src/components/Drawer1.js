import React, { useState } from 'react';
import { Button, List, ListItem, Drawer, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuBookIcon from '@material-ui/icons/MenuBook';

const useStyles = makeStyles((theme) => ({
    btn: {
        fontFamily:'Arial',
        fontSize: '1.5rem',
        fontWeight: 600,
        color:'white',
      },
    list_item: {
        alignContent:"flex-end",
        fontFamily:'Arial',
        fontSize: '1.35rem',
        fontWeight: 600,
        color:'black',
    },
    paper: {
        backgroundColor:'#eceff1'
    }
}));

const Drawer1 = () => {
    const classes = useStyles();
    const [state, setState] = useState(false);

    const toggleDrawer = (open) => (event) => {
        setState(open)
    };

const list = () => (
    <List>
        <Grid container
        display="flex"
        direction="column"
        alignItems="flex-end">
        <Grid item><ListItem><Button className={classes.list_item} href="/">דף הבית</Button></ListItem></Grid>
        <Grid item><ListItem><Button className={classes.list_item} href="/educational_stories">לימודי</Button></ListItem></Grid>
        <Grid item><ListItem><Button className={classes.list_item} href="/inspirational_stories">מעורר השראה</Button></ListItem></Grid>
        </Grid>
    </List>
)

    return (
<div>
<Button className={classes.btn} onClick={toggleDrawer(true)}><MenuBookIcon fontSize="large" /></Button>
            <Drawer
            classes={{paper: classes.paper}}
            transitionDuration={1000}
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
            >
            {list()}
            </Drawer>
</div>
    )
};

export default Drawer1
