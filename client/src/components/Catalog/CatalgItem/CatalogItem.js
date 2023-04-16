// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from '@material-ui/core';
// import {Link} from 'react-router-dom'

// const useStyles = makeStyles((theme) => ({
//   card: {
//     display: 'flex',
//     marginBottom: theme.spacing(3),
//   },
//   media: {
//     width: '30%',
//     height: 'auto',
//     marginRight: theme.spacing(2),
//   },
// }));

// export const CatalogItem = ({_id, title, category, level, image, story }) => {
//   const classes = useStyles();

//   return (
//     <Card className={classes.card}>
//       <CardMedia className={classes.media} image={image} />
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {title}
//         </Typography>
//         <Typography variant="subtitle1" color="textSecondary">
//           {category} - {level}
//         </Typography>
//         <Typography variant="body1">{story}</Typography>
//         <Link to = {`/catalog/${_id}`}>See more</Link>
//       </CardContent>
//     </Card>
//   );
// }


import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
// import {
//   Card,
//   CardMedia,
//   CardContent,
//   Typography,
// } from '@material-ui/core';
// import {Link} from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    width: '300px',
    height: '400px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  imageContainer: {
    width: '100%',
    height: '60%',
    overflow: 'hidden',
    borderRadius: '10px 10px 0 0',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  articleName: {
    margin: '10px',
    color: 'white',
    fontWeight: 'bold',
    fontSize: '1.2rem',
  },
  resume: {
    margin: '10px',
    color: 'white',
    fontSize: '0.8rem',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  button: {
    padding: '8px 16px',
    borderRadius: '4px',
    backgroundColor: '#643843ff',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    '&:hover': {
      backgroundColor: '#775860ff',
    },
  },
});


export const CatalogItem = ({_id, title, category, level, image, story }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    <div className={classes.imageContainer}>
      <img
        src={image}
        alt="image"
        className={classes.image}
      />
    </div>
    <h2 className={classes.articleName}>{title}</h2>
    <p className={classes.resume}>
      {story}
    </p>
    {/* <div className={classes.buttonContainer}>
      <button className={classes.button} >See More</button>
    </div> */}
    {/* <Link to={`/catalog/details/${_id}`} className={classes.button}>
          See More
    </Link> */}
    <div className={classes.buttonContainer}>
    <Link to={`/catalog/${_id}`}>
     <button className={classes.button}>
    See More
   </button>
   </Link>
   </div>
  </div>
  );
}
