import React from 'react'
import { 
    Grid,
    Box,
    Button, 
    Typography
 } from '@material-ui/core';
 import { makeStyles } from '@material-ui/core/styles';
 import { Fade, Rotate, Zoom, Slide } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
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
        paddingTop:'4rem',
        textAlign:'right',
        paddingRight:'1rem',
        [theme.breakpoints.up('xs')]: {
            fontSize:'1.2rem',
        },
        [theme.breakpoints.up('sm')]: {
            fontSize:'1.6rem',
        },
    }
}))


export default function CategoriesButtons() {
const classes = useStyles();
    return (
<div>
<Grid
  container
  direction="row-reverse"
  justifyContent="center"
  alignItems="center"
>
<Slide bottom duration={3000}>
<Grid item><Button className={classes.button_category} variant='contained' href="/educational_stories">לימודי</Button></Grid>
<Grid item><Button className={classes.button_category} variant='contained' href="/inspirational_stories">מעורר השראה</Button></Grid>
<Grid item><Button className={classes.button_category} variant='contained'>קטגוריה 3</Button></Grid>
<Grid item><Button className={classes.button_category} variant='contained'>קטגוריה 4</Button></Grid>
<Grid item><Button className={classes.button_category} variant='contained'>קטגוריה 5</Button></Grid>
<Grid item><Button className={classes.button_category} variant='contained'>קטגוריה 6</Button></Grid>
</Slide>
</Grid>       
</div>
    )
}
