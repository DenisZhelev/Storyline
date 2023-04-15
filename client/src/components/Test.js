// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles({
    
//   });
// export const Test = () => {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
     
//     </div>
//   );
// }

import { makeStyles } from '@material-ui/core/styles';

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

export const Test = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.imageContainer}>
        <img
          src="https://images.unsplash.com/photo-1585211969224-3e992986159d?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;h=1000"
          alt="image"
          className={classes.image}
        />
      </div>
      <h2 className={classes.articleName}>Article Name</h2>
      <p className={classes.resume}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.
      </p>
      <div className={classes.buttonContainer}>
        <button className={classes.button}>See More</button>
      </div>
    </div>
  );
};
