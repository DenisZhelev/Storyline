// import { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     padding: theme.spacing(4),
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

// export const CreateStory = () => {
//   const classes = useStyles();
//   const [title, setTitle] = useState('');
//   const [category, setCategory] = useState('');
//   const [level, setLevel] = useState('');
//   const [image, setImage] = useState('');
//   const [story, setStory] = useState('');

//   const handleTitleChange = (event) => {
//     setTitle(event.target.value);
//   };

//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

//   const handleLevelChange = (event) => {
//     setLevel(event.target.value);
//   };

//   const handleImageChange = (event) => {
//     setImage(event.target.value);
//   };

//   const handleStoryChange = (event) => {
//     setStory(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission logic here
//   };

//   return (
//     <Container className={classes.container} maxWidth="md">
//       <Paper className={classes.paper}>
//         <Typography variant="h5" align="center">
//           Add Game
//         </Typography>
//         <form className={classes.form} onSubmit={handleSubmit}>
//           <TextField
//             label="Title"
//             variant="outlined"
//             type="text"
//             value={values.title}
//             onChange={handleTitleChange}
//           />
//           <TextField
//             label="Category"
//             variant="outlined"
//             type="text"
//             value={values.category}
//             onChange={handleCategoryChange}
//           />
//           <TextField
//             label="Level"
//             variant="outlined"
//             type="text"
//             value={values.level}
//             onChange={handleLevelChange}
//           />
//           <TextField
//             label="Image URL"
//             variant="outlined"
//             type="text"
//             value={values.image}
//             onChange={handleImageChange}
//           />
//           <TextField
//             label="Story"
//             variant="outlined"
//             multiline
//             rows={4}
//             value={values.story}
//             onChange={handleStoryChange}
//           />
//           <Button className={classes.button} variant="contained" color="primary" type="submit">
//             Submit
//           </Button>
//         </form>
//       </Paper>
//     </Container>
//   );
// };


import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper, Typography, TextField, Button } from '@material-ui/core';

import { useForm   } from '../../hooks/useForm';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    padding: theme.spacing(4),
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

export const CreateStory = ({onCreateStorySubmit}) => {
  const classes = useStyles();
  const {values,changeHandler,onSubmit } = useForm({
    title:"",
    category:"",
    level:"",
    image:"",
    story:"",
  },onCreateStorySubmit);
  

  // const [title, setTitle] = useState('');
  // const [category, setCategory] = useState('');
  // const [level, setLevel] = useState('');
  // const [image, setImage] = useState('');
  // const [story, setStory] = useState('');

  // const handleTitleChange = (event) => {
  //   setTitle(event.target.value);
  // };

  // const handleCategoryChange = (event) => {
  //   setCategory(event.target.value);
  // };

  // const handleLevelChange = (event) => {
  //   setLevel(event.target.value);
  // };

  // const handleImageChange = (event) => {
  //   setImage(event.target.value);
  // };

  // const handleStoryChange = (event) => {
  //   setStory(event.target.value);
  // };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   // Handle form submission logic here
  // };

  return (
    <form className={classes.form} method='POST' onSubmit={onSubmit}>
  <label htmlFor="title">Title:</label>
  <input id="title" type="text" value={values.title} onChange = {changeHandler} name = "title" />

  <label htmlFor="category">Category:</label>
  <input id="category" type="text" value={values.category} onChange = {changeHandler} name = "category" />

  <label htmlFor="level">Level:</label>
  <input id="level" type="text" value={values.level} onChange = {changeHandler} name = "level" />

  <label htmlFor="image">Image URL:</label>
  <input id="image" type="text" value={values.image} onChange = {changeHandler} name = "image" />

  <label htmlFor="story">Story:</label>
  <textarea id="story" rows="4" value={values.story} onChange = {changeHandler} name = "story"></textarea>

  <button className={classes.button} type="submit">Submit</button>
</form>


  );
};
