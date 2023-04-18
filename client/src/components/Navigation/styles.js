import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  navLink: {
    color: 'white',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    marginRight: '20px',
    '&:hover': {
      color: 'gray',
      textDecoration: 'none',
    },
    '&:active': {
      color: 'gray',
      textDecoration: 'none',
    },
  },
    }));
export default useStyles;