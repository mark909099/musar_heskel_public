import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
     Grid,
     } from '@material-ui/core';

import InsStory1 from './inspirational_cards/InsStory1';
import InsStory2 from './inspirational_cards/InsStory2';
import InsStory3 from './inspirational_cards/InsStory3';
import InsStory4 from './inspirational_cards/InsStory4';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow:1,
    direction:'rtl'
},
paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
grid_item: {
  padding:'2rem',
},
ads_background: {
backgroundColor:'grey'
},
ads_image: {
  height:'180px',
  backgroundSize: 'cover',
},
abc: {
  backgroundColor:'grey',
}
}));


export default function InsListStories() {
    const classes = useStyles();
    return (
        <div className={classes.root}>


<Grid container>

{/* Story no.1 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<InsStory1 />
</Grid>


{/* Story no.2 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<InsStory2 />
</Grid>


{/* Story no.3 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<InsStory3 />
</Grid>


{/* Story no.3 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<InsStory4 />
</Grid>


</Grid>





        </div>

    )
};