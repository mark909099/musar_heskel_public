import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
     Grid,
     Card, CardContent, CardMedia,
     Paper,
     Typography,
     } from '@material-ui/core';

import EduStory1 from './educational_cards/EduStory1';
import EduStory2 from './educational_cards/EduStory2';
import EduStory3 from './educational_cards/EduStory3';

const useStyles = makeStyles((theme) => ({
root: {
    flexGrow:1,
    direction:"rtl",
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


export default function EduListStories() {
    const classes = useStyles();
    return (
        <div className={classes.root}>


<Grid container>

{/* Story no.1 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<EduStory1 />
</Grid>


{/* Story no.2 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<EduStory2 />
</Grid>


{/* Story no.3 */}
<Grid item xs={12} md={6} lg={4} className={classes.grid_item}>
<EduStory3 />
</Grid>


</Grid>





        </div>

    )
};