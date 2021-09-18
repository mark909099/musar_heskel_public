import React from 'react';
import { Typography, Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        direction:'rtl'
    },
    head: {
        fontFamily:'David',
        paddingTop:'1.2rem',
        paddingBottom:'1.2rem',
        paddingRight:'1.2rem',
        fontStyle:"italic",
    },
}));


export default function TopEducation() {
    const classes = useStyles();
    return (
        
        <div className={classes.root}>
<Hidden mdUp>
<Box borderBottom={2} borderTop={2}>
<Typography className={classes.head}
variant="h5"
align="right"
>
"תן לאדם דג, הוא ישבע ליום אחד;<br /> למד אותו לדוג, הוא ישבע כל חייו."
</Typography>
</Box>
</Hidden>



<Hidden smDown>
<Box borderBottom={2} borderTop={2}>
<Typography className={classes.head}
variant="h5"
align='right'
>
"תן לאדם דג, הוא ישבע ליום אחד; למד אותו לדוג, הוא ישבע כל חייו."
</Typography>
</Box>
</Hidden>

</div>

    )
}