import React from 'react';
import {
    AppBar,
    Toolbar,
    Button,
    IconButton,
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Drawer1 from './Drawer1';

const useStyles = makeStyles((theme) => ({
    all: {
      flexGrow: 1,
      direction:'rtl',
    },
    top: {
      opacity:0.75,
       backgroundColor:'#3c096c',
      backgroundSize: "cover",
    
    },
    btn: {
      fontFamily:'Arial',
      fontSize: '1.5rem',
      fontWeight: 600,
      color:'white',
    },
    btn_add: {
      marginRight: theme.spacing(1),
      color:'white',
    },
    dropdown: {
      color:'white',
      fontSize: '2.5rem',
    },
  }));

const Navbar = () => {
    const classes= useStyles();
    return (
<div className={classes.all}>
<div>
    <AppBar position="static" className={classes.top}>
        <Toolbar>
            <IconButton edge="start" aria-label="menu">
            <Drawer1 />
            </IconButton>
            <Button size="large" className={classes.btn_add} href="/new"><AddIcon fontSize="large"/></Button>
        </Toolbar>
    </AppBar>
</div>        
</div>
    )
}

export default Navbar
