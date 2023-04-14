import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@material-ui/core';
import {Link} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    marginBottom: theme.spacing(3),
  },
  media: {
    width: '30%',
    height: 'auto',
    marginRight: theme.spacing(2),
  },
}));

export const CatalogItem = ({_id, title, category, level, image, story }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} />
      <CardContent>
        <Typography variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {category} - {level}
        </Typography>
        <Typography variant="body1">{story}</Typography>
        <Link to = {`/catalog/${_id}`}>See more</Link>
      </CardContent>
    </Card>
  );
}
