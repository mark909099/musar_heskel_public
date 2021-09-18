import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { makeStyles} from '@material-ui/core/styles';
import {
    CircularProgress,
    FormControl,
    Grid,
    Button,
    Typography,
    TextField,

  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        direction: 'rtl',
    },
    header: {
        [theme.breakpoints.up('xs')]: {
        fontFamily:'Courier New',
        fontSize:'1.6rem',
        },
        [theme.breakpoints.up('md')]: {
        fontFamily:'Courier New',
        fontSize:'3rem',
        },
        [theme.breakpoints.up('lg')]: {
        fontFami:'Courier New',
        fontSize:'4rem',
        },       
    },
    sub_header: {
        [theme.breakpoints.up('xs')]: {
        fontFamily:'Courier New',
        fontSize:'1.2rem',
        },
        [theme.breakpoints.up('md')]: {
        fontFamily:'Courier New',
        fontSize:'2rem',
        },
        [theme.breakpoints.up('lg')]: {
        fontFami:'Courier New',
        fontSize:'2.5rem',
        },
    },
    form_item: {
        paddingBottom:'1.2rem'
    },
    form_error: {
        color:'red',
        paddingBottom:'0rem'
      },
    form_name: {
        [theme.breakpoints.up('xs')]: {
            fontFamily:'Arial',    
            fontSize:'1rem',
            width:'50vw',
            },
            [theme.breakpoints.up('sm')]: {
            fontFamily:'Arial',   
            fontSize:'1rem',
            width:'250px',  
            },
        },
        form_text: {
            [theme.breakpoints.up('xs')]: {
            textAlign:'right',
            fontSize:'1rem',
            direction:'rtl',
            width:'95vw',
            },
            [theme.breakpoints.up('sm')]: {
                textAlign:'right',
                fontSize:'1rem',
                direction:'rtl',
                width:'70vw',
                },
          [theme.breakpoints.up('md')]: {
            textAlign:'right',
            fontSize:'1.25rem',
            direction:'rtl',
            width:'550px',
            },
          },
    message: {
        [theme.breakpoints.up('xs')]: {
            fontFamily:'Arial',    
            fontSize:'1rem',
            width:'90vw',
            },
            [theme.breakpoints.up('sm')]: {
            fontFamily:'Arial',   
            fontSize:'10rem',
            width:'500px',  
            },
    },
}))

const schema = yup.object().shape({
    name: yup.string().required('אנא הוסיפו שם'),
    email: yup.string().email('כתובת אימייל לא תקנית').required('אנא הוסיפו אימייל'),
    message: yup.string().required('אנא הוסיפו הודעה'),
  });

export default function ContactForm() {
    const classes = useStyles();
    const { handleSubmit, control, formState: { errors } } = useForm({
        resolver: yupResolver(schema)
      });
    const [loading, setLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const history = useHistory();

    const onSubmit = (data) => {
        setLoading(true);
        setIsError(false);

        const headers = {
            'Content-type': 'text/plain',
             };
        const redirectToThankYou = () => {
            history.push('/thankyou_contact')
        }

        const sendNewContactRequest = async () => {
            try {
                await axios.post("https://8rzb2eozhb.execute-api.us-east-1.amazonaws.com/default/AddContact", data, {headers});
                setLoading(false);
                redirectToThankYou();
            } catch (err) {
                setLoading(false);
                setIsError(true);
                console.log(err);
            }
        };

        sendNewContactRequest();
    }
    return(
<div className={classes.root}>
<Grid container spacing={1}
direction="column"
justify="center"
alignItems="center"
>

    
<Grid item>
<Typography className={classes.header}> הצעות? רעיונות? שאלות? </Typography>    
</Grid>
<Grid item>
<Typography className={classes.sub_header}> דברו איתנו </Typography>
</Grid>

<form>
    <Grid item className={classes.form_item}>
        <Controller 
        name="name"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        error={errors.name ? true : false}
        render={({ field }) =>
    <TextField placeholder="שם *" className={classes.form_name} {...field} />}
        />
        <div className={classes.form_error}>{errors.name?.message}</div>
    </Grid>

    <Grid item className={classes.form_item}>
        <Controller 
        name="email"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        error={errors.email ? true : false}
        render={({ field }) =>
    <TextField placeholder="אימייל *" className={classes.form_name} {...field}></TextField>}
        />
        <div className={classes.form_error}>{errors.email?.message}</div>
    </Grid>

    <Grid item className={classes.form_item}>
        <Controller 
        name="message"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        error={errors.message ? true : false}
        render={({ field }) =>
    <TextField multiline="true" rows="15" placeholder="תוכן ההודעה *" className={classes.form_text} {...field}></TextField>}
        />
        <div className={classes.form_error}>{errors.message?.message}</div>
    </Grid>
    {isError && <small>שגיאה, אנא נסה שוב מאוחר יותר. . .</small>}
    <Grid item>
        <Button className={classes.btn}
         variant="outlined"
         onClick={handleSubmit(onSubmit)}
         disabled={loading}> 
         {loading ? <CircularProgress /> :
          "שלח"
          }</Button>

      </Grid>
</form>


</Grid>
</div>
    )
}