import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardHeader, CardMedia, CardActionArea,
Avatar,
Button,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 400,
        height:320,
    },
    avatar: {
        backgroundColor: '#0899ba',
        width: theme.spacing(7),
        height: theme.spacing(7),
    },
    media:{
        height: 215,
        borderRadius:'5px',
    },
}));

export default function InsStory1() {
    const classes = useStyles();
    return (
<div>
<Card className={classes.root}>
<CardActionArea component={Button} href="/inspirational_stories/story1">
<CardHeader
title="הפיל והחבל"
titleTypographyProps={{variant:'h5'}}
subheader="אל תיתן לעבר לעצור אותך"
subheaderTypographyProps={{variant:'subtitle1'}}
> </CardHeader>
<CardMedia className={classes.media}
image='/images/ins_stories/elephant1.jpg'
>

</CardMedia>
</CardActionArea>
</Card>
</div>
    )
};