import { useState, useEffect } from 'react';

import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import { Routes , Route, useNavigate } from 'react-router-dom';

import * as storyService from './services/storyService'

import { Navigation } from "./components/Navigation/Navigation.js";
import { Login } from "./components/Login/Login.js";
import { Register } from './components/Register/Register.js';
import { Home } from './components/Home/Home.js';
import { CreateStory } from './components/CreateStory/CreateStory.js';
import { Catalog } from './components/Catalog/Catalog';
import { StoryDetails } from './components/StoryDetails/StoryDetails';
import { makeStyles } from '@material-ui/core/styles';
//test
import { Test } from './components/Test';
import backgroundImage from './images/bak.jpg'

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  },
});


function App() {
const navigate = useNavigate(); 
  // const [ storyes, setStory] = useState([]);

  // useEffect(() => {
  //   storyService.getAll()
  //     .then(storyes => { 
  //       setStory(result)
  //   });
  // },[]);

  const [storyes, setStory] = useState([]);

  useEffect(() => {
    storyService.getAll()
      .then(storyes => { 
        setStory(storyes);
      });
  }, []);

  const onCreateStorySubmit = async (data) => {
    const newStory = await storyService.create(data)
    // add to state
    setStory(state => [...state, newStory])
    // redirect to cata;og
    navigate('/catalog');
  }
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
     <Navigation/>
      <main className={classes.root} >
        <Routes>'classes' is not defined.eslintno-undef
          <Route path='/' element = {<Home/>}/>
          <Route path='/login' element = {<Login/>}/>
          <Route path='/register' element = {<Register/>}/>
          <Route path ='/create' element = {<CreateStory onCreateStorySubmit={onCreateStorySubmit}/>}/>
          <Route path ='/catalog' element = {<Catalog  storyes = {storyes}/>}/>
          <Route path ='/catalog/:storyId' element = {<StoryDetails />} />

          <Route path='/test' element = {<Test/>}/>

        </Routes>
      </main>
    </ThemeProvider>
  );
}

export default App;

