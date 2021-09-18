import axios from "axios";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { useForm, Controller } from "react-hook-form";
import { makeStyles } from '@material-ui/core/styles';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import {
  CircularProgress,
  Grid, 
  Button,

  TextField,

} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  form: {
      direction: 'rtl',
    [theme.breakpoints.down('sm')]: {
    border:'1.5px solid black',
    padding: theme.spacing(1),
    flexGrow:1,
    },
    [theme.breakpoints.up('md')]: {
      border:'1.5px solid black',
      padding: theme.spacing(2),
      flexGrow:1,
    },
  },
  form_item: {
    direction:'rtl',
    paddingBottom:'2rem',
    paddingTop:'0rem'
  },
  form_name: {
    [theme.breakpoints.up('xs')]: {
    textAlign:'right',
    fontSize:'1rem',
    direction:'rtl',
    width:'50vw',
    },
    [theme.breakpoints.up('sm')]: {
      textAlign:'right',
      fontSize:'1rem',
      direction:'rtl',
      width:'40vw',
      },
  [theme.breakpoints.up('md')]: {
    textAlign:'right',
    fontSize:'1.25rem',
    direction:'rtl',
    width:'30vw',
    },
  },
  form_text: {
    [theme.breakpoints.up('xs')]: {
    textAlign:'right',
    fontSize:'1rem',
    direction:'rtl',
    width:'92vw',
    },
  [theme.breakpoints.up('md')]: {
    textAlign:'right',
    fontSize:'1.25rem',
    direction:'rtl',
    width:'95vw',
    },
  },
  btn: {
    marginTop:'1rem',
    fontSize:'1.1rem',
    fontWeight:'600',
  },
  form_error: {
    color:'red',
    paddingBottom:'0rem'
  }
}))

const schema = yup.object().shape({
  name: yup.string().required('אנא הוסיפו שם'),
  content: yup.string().required('אנא הוסיפו תוכן'),
});


export default function PostNewStory2() {
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
      history.push('/thankyou_story')
    }

    const sendNewStoryRequest = async () => {
      try {
        await axios.post('https://ct96xff4ck.execute-api.us-east-1.amazonaws.com/default/AddStory', data, {headers});
        setLoading(false);
        redirectToThankYou();
      } catch(err) {
          setLoading(false);
          setIsError(true);
          console.log(err);
      }
    };

    sendNewStoryRequest();
  };
   
  return (
<div className={classes.form}>
<Grid container spacing={1}
direction="column"
justify="space-around"
alignItems="flex-start"
>
    <form>
      <Grid item className={classes.form_item}>
      <Controller
        name="name"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        error={errors.name ? true : false}
        render={({ field }) =>
        <TextField placeholder="שם הסיפור *" className={classes.form_name} {...field} />}
      />
      <div className={classes.form_error}>{errors.name?.message}</div>
      </Grid>

      <Grid item className={classes.form_item}>
      <Controller
        name="content"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={({ field }) =>
        <TextField multiline='true' rows='20' placeholder="תוכן הסיפור *" className={classes.form_text} {...field} />}
      />
      <div className={classes.form_error}>{errors.content?.message}</div>
      </Grid>

      <Grid item className={classes.form_item}>
      <Controller
        name="category"
        control={control}
        defaultValue=''
        rules={{ required: true }}
        render={({ field }) =>
        <TextField placeholder="קטגוריה (לא חובה)" className={classes.form_name} {...field} />}
      />
      </Grid>
      {isError && <small>שגיאה, אנא נסה שוב מאוחר יותר. . .</small>}
      <Grid item>
        <Button className={classes.btn}
         variant="outlined"
         onClick={handleSubmit(onSubmit)}
         disabled={loading}> 
         {loading ? <CircularProgress /> :
          "הוסף"
          }</Button>

      </Grid>
    </form>
</Grid>
</div>
  );
}