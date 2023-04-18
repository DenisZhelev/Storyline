
// // tets

// import { Link } from "react-router-dom";

// import { useAuthContext } from "../../contexts/AuthContext";
// import { useForm } from "../../hooks/useForm";

// const LoginFormKeys = {
//     Email: 'email',
//     Password: 'password'
// };

// export const Login = () => {
//     const { onLoginSubmit } = useAuthContext();
//     const { values, changeHandler, onSubmit } = useForm({
//         [LoginFormKeys.Email]: '',
//         [LoginFormKeys.Password]: '',
//     }, onLoginSubmit);

//     return (
//         <section id="login-page" className="auth">
//             <form id="login" method="POST" onSubmit={onSubmit}>
//                 <div className="container">
//                     <div className="brand-logo"></div>
//                     <h1>Login</h1>
//                     <label htmlFor="email">Email:</label>
//                     <input
//                         type="email"
//                         id="email"
//                         placeholder="Sokka@gmail.com"
//                         name={LoginFormKeys.Email}
//                         value={values[LoginFormKeys.Email]}
//                         onChange={changeHandler}
//                     />

//                     <label htmlFor="login-pass">Password:</label>
//                     <input
//                         type="password"
//                         id="login-password"
//                         name={LoginFormKeys.Password}
//                         value={values[LoginFormKeys.Password]}
//                         onChange={changeHandler}
//                     />
//                     <input type="submit" className="btn submit" value="Login" />
//                     <p className="field">
//                         <span>If you don't have profile click <Link to="/register">here</Link></span>
//                     </p>
//                 </div>
//             </form>
//         </section>
//     );
// }

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

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  paper: {
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

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

