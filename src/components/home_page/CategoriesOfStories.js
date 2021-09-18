import React from 'react'
import { 
    Grid,
    Box,
    Button, 
    Typography
 } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Fade } from 'react-reveal';
import CategoriesButtons from './CategoriesButtons';

const useStyles = makeStyles((theme) => ({
    root: {
            height:'100vh',
            backgroundImage:'url(images/bg5.jpg)',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover", 
            borderTop:'3px solid black',
    },
    button_category: {
        border:'1px solid black',
        opacity:'0.9',
        margin:'0.1rem',
        width:'180px',
        color:'#fafafa',
        backgroundColor:'#7b1fa2',
        '&:hover': {
            backgroundColor:'#f9a825'
        }
    },
    categories_header: {
        paddingTop:'3rem',
        paddingBottom:'3rem',
        textAlign:'right',
        paddingRight:'1rem',
        fontFamily:'Arimo',
        [theme.breakpoints.up('xs')]: {
            fontSize:'2rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'3rem',
        },
        [theme.breakpoints.up('md')]: {
            fontSize:'4rem',
        },
        [theme.breakpoints.up('lg')]: {
            fontSize:'5.5rem',
        },
    }
}))


 export default function CategoriesOfStories() {
const classes = useStyles();
    return (
<Fade duration={2000}>
<div className={classes.root}>
<Grid
  container
  direction="row"
  justifyContent="center"
  alignItems="center"
>
<Grid item xs={1} md={2}></Grid>
<Grid item xs={10} md={8}>
    <Fade right duration={3000}>
    <Typography className={classes.categories_header}>
        קטגוריות
    </Typography>
    </Fade>

<CategoriesButtons />
    
</Grid>
<Grid item xs={1} md={2}></Grid>
</Grid>     
</div>
</Fade>
    )
}
