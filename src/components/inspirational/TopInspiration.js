import React from 'react';
import { Typography, Box, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    head: {
        fontFamily:'David',
        paddingTop:'1.2rem',
        paddingBottom:'1.2rem',
        paddingRight:'1.2rem',
        fontStyle:"italic",
        direction:'rtl'
    },
}));


export default function TopInspiration() {
    const classes = useStyles();
    return (
        
        <div>
<Hidden mdUp>
<Box borderBottom={2} borderTop={2}>
<Typography className={classes.head}
variant="h5"
align="right"
>
 
"המקום הבטוח ביותר לספינה הוא בנמל, אבל לא בשביל זה ספינות נבנות."

</Typography>
</Box>
</Hidden>



<Hidden smDown>
<Box borderBottom={2} borderTop={2}>
<Typography className={classes.head}
variant="h5"
align='right'
>
    
"המקום הבטוח ביותר לספינה הוא בנמל, אבל לא בשביל זה ספינות נבנות."

</Typography>
</Box>
</Hidden>

</div>

    )
}