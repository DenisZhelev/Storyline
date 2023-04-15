import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  box: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
  },
  subtitle: {
    textAlign: "center",
    fontSize: "1.2rem",
  },
}));

export const Home = () => {
  const classes = useStyles();
  
  return (
    <div className={classes.box}>
      <h1 className={classes.title}>Welcome to Storyline</h1>
      <p className={classes.subtitle}>A place for every story under the sun</p>
    </div>
  );
}
