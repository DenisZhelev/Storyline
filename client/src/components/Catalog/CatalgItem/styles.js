import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    root: {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
      },
      body: {
        alignItems: 'center',
        backgroundColor: '#F3F5F7',
        fontFamily: 'Poppins, sans-serif',
        width: '100%',
        minHeight: '100vh',
        color: '#1B1C34',
        display: 'flex',
        justifyContent: 'center',
      },
      container: {
        maxWidth: '70%',
        margin: '0 auto',
        height: '100%',
        [theme.breakpoints.between('md', 'lg')]: {
          maxWidth: '80%',
        },
        [theme.breakpoints.down('sm')]: {
          maxWidth: '90%',
        },
      },
      grid: {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
        gap: '3%',
        margin: '5% 0',
        [theme.breakpoints.between('md', 'lg')]: {
          gap: '2%',
        },
        [theme.breakpoints.down('sm')]: {
          gridTemplateColumns: '1fr',
          gap: '2%',
        },
      },
      card: {
        overflow: 'hidden',
        padding: '20px',
        backgroundColor: '#FFF',
        borderRadius: '30px',
        textAlign: 'center',
        [theme.breakpoints.between('md', 'lg')]: {
          padding: '15px',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '20px 10px',
        },
      },
      cardImg: {
        '& img': {
          width: '100%',
          height: 'auto',
          borderRadius: '20px',
        },
      },
      cardBody: {
        padding: '26px 20px 36px 20px',
        [theme.breakpoints.between('md', 'lg')]: {
          padding: '15px',
        },
        [theme.breakpoints.down('sm')]: {
          padding: '7px',
        },
      },
      cardTitle: {
        fontFamily: 'Merriweather, serif',
        fontWeight: 900,
        textTransform: 'capitalize',
        fontSize: '26px',
        paddingBottom: '20px',
        [theme.breakpoints.between('md', 'lg')]: {
          fontSize: '22px',
          paddingBottom: '14px',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '20px',
          paddingBottom: '7px',
        },
      },
      cardText: {
        fontWeight: 400,
        fontSize: '18px',
        lineHeight: 1.7,
        [theme.breakpoints.between('md', 'lg')]: {
          fontSize: '16px',
        },
        [theme.breakpoints.down('sm')]: {
          fontSize: '14px',
        },
      },
      cardAuthor: {
        fontSize: '15px',
        paddingTop: '15px',
        '& a': {
          color: '#1B1C34',
          fontStyle: 'italic',
          '&:hover': {
            fontWeight: 'bold',
          },
        },
      },
      readMore: {
        color: '#FFF',
        fontSize: '13px',
        textDecoration: 'none',
        letterSpacing: '1.1px',
        background: '#0F1616',
        marginTop: '50px',
        padding: '24px 0px',
        borderRadius: '15px',
        display: 'inline-block',
        width: '70%',
        transition: 'all .1s ease-in-out',
        '& i': {
        paddingLeft: '7px',
        },
        '&:hover': {
        textDecoration: 'underline',
        backgroundColor: 'black',
        },
        [theme.breakpoints.between('md', 'lg')]: {
        padding: '19px 0',
        width: '60%',
        fontSize: '11px',
        marginTop: '30px',
        },
        [theme.breakpoints.down('sm')]: {
        padding: '15px 0',
        marginTop: '20px',
        },
        },
    }));
export default useStyles;