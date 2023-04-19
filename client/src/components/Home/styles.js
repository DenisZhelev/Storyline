import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  welcomeMessage: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    height: "100vh" 
  },
      welcomeTitle: {
        fontSize: "2.5rem",
        fontWeight: 700,
        margin: theme.spacing(1),
      },
      welcomeSubtitle: {
        fontSize: "1.5rem",
        margin: theme.spacing(1),
      },
      latestStoriesContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
    }));
export default useStyles;