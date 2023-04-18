
import { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Container,
  Paper,
  Typography,
  TextField,
  Button
} from "@material-ui/core";

import { useForm } from "../../hooks/useForm";
import { AuthContext } from "../../contexts/AuthContext";

import useStyles from './styles';

export const Login = () => {
  const classes = useStyles();
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm(
    {
      email: "",
      password: "",
    },
    onLoginSubmit
  );

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className={classes.form} onSubmit={onSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={values.email}
            onChange={changeHandler}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={values.password}
            onChange={changeHandler}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Login
          </Button>
          <Typography variant="body2" align="center">
            Don't have an account? <Link to="/register">Sign up</Link>
          </Typography>
        </form>
      </Paper>
    </Container>
  );
};

