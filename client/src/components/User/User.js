// import { Link ,useParams} from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import {
//   Container,
//   Paper,
//   Typography,
//   TextField,
//   Button
// } from "@material-ui/core";
// import { useContext, useEffect, useState } from "react";
// import { useForm } from "../../hooks/useForm";
// import { AuthContext } from "../../contexts/AuthContext";
// import { requestFactory } from "../../services/requester";
// // import useStyles from './styles';

// export const User = () => {
//   const { userId } = useParams();
//   const { userId: currentUserId, isAuthenticated, userEmail, username } = useContext(AuthContext);
// //   const classes = useStyles();
//   const { values, changeHandler, onSubmit } = useForm(
//     {
//       username: "",
//       email: "",
//       password: "",
//     },
//   );

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const request = requestFactory();
//         const user = await request.get(`http://localhost:3001/users/${userId}`);
//         setUser(user);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container maxWidth="xs">
//       <Typography component="h1" variant="h5">
//         {user.username}
//       </Typography>
//       <Typography component="p">{user.email}</Typography>
//     </Container>
//   );
// };


// import { Link, useParams } from "react-router-dom";
// import { makeStyles } from "@material-ui/core/styles";
// import { Container, Paper, Typography, TextField, Button } from "@material-ui/core";
// import { useContext, useEffect, useState } from "react";
// import { useForm } from "../../hooks/useForm";
// import { AuthContext } from "../../contexts/AuthContext";
// import { requestFactory } from "../../services/requester";

// const useStyles = makeStyles((theme) => ({
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     marginTop: theme.spacing(4),
//   },
//   input: {
//     marginBottom: theme.spacing(2),
//   },
// }));

// export const User = () => {
//   const { userId } = useParams();
//   const { userId: currentUserId, isAuthenticated, userEmail, username } = useContext(AuthContext);
//   const classes = useStyles();
//   const { values, changeHandler, onSubmit } = useForm({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const request = requestFactory();
//         const user = await request.get(`http://localhost:3001/users/${userId}`);
//         setUser(user);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchUser();
//   }, [userId]);

//   const handleUpdate = async (event) => {
//     event.preventDefault();
//     try {
//       const request = requestFactory();
//       const updatedUser = await request.put(`http://localhost:3001/users/${userId}`, values);
//       setUser(updatedUser);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (!user) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <Container maxWidth="xs">
//       <Typography component="h1" variant="h5">
//         {user.username}
//       </Typography>
//       <Typography component="p">{user.email}</Typography>
//       <form className={classes.form} onSubmit={handleUpdate}>
//         <TextField
//           className={classes.input}
//           variant="outlined"
//           label="Username"
//           name="username"
//           value={values.username}
//           onChange={changeHandler}
//         />
//         <TextField
//           className={classes.input}
//           variant="outlined"
//           label="Email"
//           name="email"
//           value={values.email}
//           onChange={changeHandler}
//         />
//         <TextField
//           className={classes.input}
//           variant="outlined"
//           label="Password"
//           name="password"
//           type="password"
//           value={values.password}
//           onChange={changeHandler}
//         />
//         <Button variant="contained" color="primary" type="submit">
//           Update
//         </Button>
//       </form>
//     </Container>
//   );
// };


import { Container} from "@material-ui/core";


export const User = () => {

  return (
    <Container maxWidth="xs">
      <h1>User</h1>
    </Container>
  );
};
