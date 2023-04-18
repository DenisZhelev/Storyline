import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: theme.spacing(3),
    },
    form: {
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    title: {
        marginBottom: theme.spacing(4),
    },
    textField: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    submitButton: {
        marginTop: theme.spacing(2),
    }
    }));
export default useStyles;