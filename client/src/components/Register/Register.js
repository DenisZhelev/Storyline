// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//   },
//   paper: {
//     padding: theme.spacing(4),
//     borderRadius: theme.shape.borderRadius,
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: theme.spacing(2),
//   },
//   button: {
//     marginTop: theme.spacing(2),
//   },
// }));

// export const Register = () => {
//   const classes = useStyles();
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleUsernameChange = (event) => {
//     setUsername(event.target.value);
//   };

//   const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     setPassword(event.target.value);
//   };

//   const handleConfirmPasswordChange = (event) => {
//     setConfirmPassword(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     if (password !== confirmPassword) {
//       alert('Passwords do not match');
//     } else {
//       // Handle register logic here
//     }
//   };

//   return (
//     <Container className={classes.container} maxWidth="xs">
//       <Paper className={classes.paper}>
//         <Typography variant="h5" align="center">
//           Register
//         </Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//            <TextField
//             label="Username"
//             variant="outlined"
//             type="text"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//           <TextField
//             label="Email"
//             variant="outlined"
//             type="email"
//             value={email}
//             onChange={handleEmailChange}
//           />
//           <TextField
//             label="Password"
//             variant="outlined"
//             type="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//           <TextField
//             label="Confirm Password"
//             variant="outlined"
//             type="password"
//             value={confirmPassword}
//             onChange={handleConfirmPasswordChange}
//           />
//           <Button className={classes.button} variant="contained" color="primary" type="submit">
//             Register
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  paper: {
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
}));

export const Register = () => {
  const classes = useStyles();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = {};
    if (!username) {
      errors.username = 'Please enter a username';
    }
    if (!email) {
      errors.email = 'Please enter an email';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Please enter a valid email address';
    }
    if (!password) {
      errors.password = 'Please enter a password';
    }
    if (!confirmPassword) {
      errors.confirmPassword = 'Please confirm your password';
    } else if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match';
    }
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Handle register logic here
    }
  };

  return (
    <Container className={classes.container} maxWidth="xs">
      <Paper className={classes.paper}>
        <Typography variant="h5" align="center">
          Register
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
           <TextField
            label="Username"
            variant="outlined"
            type="text"
            value={username}
            onChange={handleUsernameChange}
            error={!!errors.username}
            helperText={errors.username}
          />
          <TextField
            label="Email"
            variant="outlined"
            type="email"
            value={email}
            onChange={handleEmailChange}
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            value={password}
            onChange={handlePasswordChange}
            error={!!errors.password}
            helperText={errors.password}
          />
          <TextField
            label="Confirm Password"
            variant="outlined"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword}
          />
          <Button className={classes.button} variant="contained" color="primary" type="submit">
            Register
          </Button>
        </form>
      </Paper>
    </Container>
 );
};