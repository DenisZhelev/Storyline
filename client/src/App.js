
/// test
// import { Routes, Route } from 'react-router-dom';

// import { AuthProvider } from './contexts/AuthContext';
// import { GameProvider } from './contexts/GameContext';

// import { Navigation } from "./components/Navigation/Navigation";
// import { Home } from "./components/Home/Home";
// import { Login } from "./components/Login/Login";
// import { Logout } from "./components/Logout/Logout";
// import { Register } from "./components/Register/Register";
// import { CreateStory } from "./components/CreateStory/CreateStory";
// import { Catalog } from "./components/Catalog/Catalog";
// import { StoryDetails } from './components/StoryDetails/StoryDetails';
// import { EditStory } from './components/EditStory/EditStory';
// import { RouteGuard } from './components/common/RouteGuard';
// import { GameOwner } from './components/common/GameOwner';

// function App() {
//     return (
//         <AuthProvider>
//             <GameProvider>
//                 <div id="box">
//                     <Navigation />

//                     <main id="main-content">
//                         <Routes>
//                             <Route path='/' element={<Home />} />
//                             <Route path='/login' element={<Login />} />
//                             <Route path='/register' element={<Register />} />
//                             <Route path='/catalog' element={<Catalog />} />
//                             <Route path='/catalog/:gameId' element={<StoryDetails />} />

//                             <Route element={<RouteGuard />}>
//                                 <Route path='/catalog/:gameId/edit' element={
//                                     <GameOwner>
//                                         <EditStory />
//                                     </GameOwner>
//                                 } />
//                                 <Route path='/create-game' element={<CreateStory />} />
//                                 <Route path='/logout' element={<Logout />} />
//                             </Route>

//                             {/* <Route path='/create-game' element={
//                             <RouteGuard>
//                                 <CreateGame onCreateGameSubmit={onCreateGameSubmit} />
//                             </RouteGuard>
//                         } /> */}
//                         </Routes>
//                     </main>

                  
//                 </div>
//             </GameProvider>
//         </AuthProvider>
//     );
// }

// export default App;


// import { useState, useEffect } from 'react';

// import { createTheme, ThemeProvider } from '@material-ui/core/styles';
// import { Routes , Route, useNavigate } from 'react-router-dom';

// import { storyServiceFactory} from './services/storyService'
// import { authServiceFactory } from './services/authService';
// import { AuthContext } from './contexts/AuthContext';
// import { useService } from './hooks/useService';

// import { Navigation } from "./components/Navigation/Navigation.js";
// import { Login } from "./components/Login/Login.js";
// import { Logout } from "./components/Logout/Logout.js";
// import { Register } from './components/Register/Register.js';
// import { Home } from './components/Home/Home.js';
// import { CreateStory } from './components/CreateStory/CreateStory.js';
// import { Catalog } from './components/Catalog/Catalog';
// import { StoryDetails } from './components/StoryDetails/StoryDetails';
// import { makeStyles } from '@material-ui/core/styles';
// //test
// import { Test } from './components/Test';
// import backgroundImage from './images/bak.jpg'

// const theme = createTheme({
//   breakpoints: {
//     values: {
//       xs: 0,
//       sm: 600,
//       md: 960,
//       lg: 1280,
//       xl: 1920,
//     },
//   },
// });


// const useStyles = makeStyles({
//   root: {
//     backgroundImage: `url(${backgroundImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     height: '100vh',
//   },
// });


// function App() {
// const navigate = useNavigate(); 
//   // const [ storyes, setStory] = useState([]);

//   // useEffect(() => {
//   //   storyService.getAll()
//   //     .then(storyes => { 
//   //       setStory(result)
//   //   });
//   // },[]);

//   const [storyes, setStoryes] = useState([]);
//   const [auth, setAuth] = useState({});
//   const storyService = storyServiceFactory(auth.accessToken);
//   const authService = authServiceFactory(auth.accessToken);

//   useEffect(() => {
//     storyService.getAll()
//       .then(result => { 
//         setStoryes(result);
//       });
//   },[]);

//   const onCreateStorySubmit = async (data) => {
//     const newStory = await storyService.create(data)
//     // add to state
//     setStoryes(state => [...state, newStory])
//     // redirect to cata;og
//     navigate('/catalog');
//   }

//   const onLoginSubmit = async(data) => {
//     try{
//       const result = await authService.login(data);
//       setAuth(result);
//       navigate('/catalog');
//     }catch(error){
//       console.log("error")
//     }
//   };

//   const onRegisterSubmit = async(data) =>{
//     const {confirmPassword, ...registerData} = data;
//     if(confirmPassword !== registerData.password){
//       return;
//     }
//     try{
//       const result = await authService.register(registerData);
//       setAuth(result);
//       navigate('/catalog');
//     }catch(error){
//       console.log("error")
//     }
//   }

//   const onLogout = async() => {
//     await authService.logout();

//     setAuth({});
//   }


//   const classes = useStyles();

//   const contextValues = 
//   {
//       onLoginSubmit,
//       onRegisterSubmit,
//       onLogout,
//       userId: auth._id,
//       token: auth.accessToken,
//       userEmail: auth.email,
//       isAuthenticated: !!auth.accessToken,
//   }
//   return (
//     <AuthContext.Provider value = {contextValues}>
//     <ThemeProvider theme={theme}>
//      <Navigation/>
//       <main className={classes.root} >
//         <Routes>'classes' is not defined.eslintno-undef
//           <Route path='/' element = {<Home/>}/>
//           <Route path='/login' element = {<Login/>}/>
//           <Route path='/logout' element = {<Logout/>}/>
//           <Route path='/register' element = {<Register/>}/>
//           <Route path ='/create' element = {<CreateStory onCreateStorySubmit={onCreateStorySubmit}/>}/>
//           <Route path ='/catalog' element = {<Catalog  storyes = {storyes}/>}/>
//           <Route path ='/catalog/:storyId' element = {<StoryDetails />} />

//           <Route path='/test' element = {<Test/>}/>

//         </Routes>
//       </main>
//     </ThemeProvider>
//     </AuthContext.Provider>
//   );
// }

// export default App;

/// test
// import { Routes, Route } from 'react-router-dom';

// import { AuthProvider } from './contexts/AuthContext';
// import { StoryProvider } from './contexts/StoryContext';

// import { Navigation } from "./components/Navigation/Navigation";
// import { Home } from "./components/Home/Home";
// import { Login } from "./components/Login/Login";
// import { Logout } from "./components/Logout/Logout";
// import { Register } from "./components/Register/Register";
// import { CreateStory } from "./components/CreateStory/CreateStory";
// import { Catalog } from "./components/Catalog/Catalog";
// import { StoryDetails } from './components/StoryDetails/StoryDetails';
// import { EditStory } from './components/EditStory/EditStory';
// import { RouteGuard } from './components/common/RouteGuard';
// import { StoryOwner } from './components/common/StoryOwner';

// function App() {
//     return (
//         <AuthProvider>
//             <StoryProvider>
//                 <div id="box">
//                     <Navigation />

//                     <main id="main-content">
//                         <Routes>
//                             <Route path='/' element={<Home />} />
//                             <Route path='/login' element={<Login />} />
//                             <Route path='/register' element={<Register />} />
//                             <Route path='/catalog' element={<Catalog />} />
//                             <Route path='/catalog/:storyId' element={<StoryDetails />} />

//                             <Route element={<RouteGuard />}>
//                                 <Route path='/catalog/:storyId/edit' element={
//                                     <StoryOwner>
//                                         <EditStory />
//                                     </StoryOwner>
//                                 } />
//                                 <Route path='/create-story' element={<CreateStory />} />
//                                 <Route path='/logout' element={<Logout />} />
//                             </Route>

//                             {/* <Route path='/create-story' element={
//                             <RouteGuard>
//                                 <CreateStory onCreateStorySubmit={onCreateStorySubmit} />
//                             </RouteGuard>
//                         } /> */}
//                         </Routes>
//                     </main>

                  
//                 </div>
//             </StoryProvider>
//         </AuthProvider>
//     );
// }

// export default App;


// import { Routes, Route } from 'react-router-dom';

// import { AuthProvider } from './contexts/AuthContext';
// import { GameProvider } from './contexts/StoryContext';

// import { Navigation } from "./components/Navigation/Navigation";
// // import { Footer } from "./components/Footer/Footer";
// import { Home } from "./components/Home/Home";
// import { Login } from "./components/Login/Login";
// import { Logout } from "./components/Logout/Logout";
// import { Register } from "./components/Register/Register";
// import { CreateGame } from "./components/CreateStory/CreateStory";
// import { Catalog } from "./components/Catalog/Catalog";
// import { GameDetails } from './components/StoryDetails/StoryDetails';
// import { EditGame } from './components/EditStory/EditStory';
// import { RouteGuard } from './components/common/RouteGuard';
// import { GameOwner } from './components/common/StoryOwner';

// function App() {
//     return (
//         <AuthProvider>
//             <GameProvider>
//                 <div id="box">
//                     <Navigation />

//                     <main id="main-content">
//                         <Routes>
//                             <Route path='/' element={<Home />} />
//                             <Route path='/login' element={<Login />} />
//                             <Route path='/register' element={<Register />} />
//                             <Route path='/catalog' element={<Catalog />} />
//                             <Route path='/catalog/:gameId' element={<GameDetails />} />

//                             <Route element={<RouteGuard />}>
//                                 <Route path='/catalog/:gameId/edit' element={
//                                     <GameOwner>
//                                         <EditGame />
//                                     </GameOwner>
//                                 } />
//                                 <Route path='/create-game' element={<CreateGame />} />
//                                 <Route path='/logout' element={<Logout />} />
//                             </Route>

//                             {/* <Route path='/create-game' element={
//                             <RouteGuard>
//                                 <CreateGame onCreateGameSubmit={onCreateGameSubmit} />
//                             </RouteGuard>
//                         } /> */}
//                         </Routes>
//                     </main>
//                 </div>
//             </GameProvider>
//         </AuthProvider>
//     );
// }

// export default App;





import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { StoryProvider } from './contexts/StoryContext';

import { Navigation } from "./components/Navigation/Navigation";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { Register } from "./components/Register/Register";
import { CreateStory } from "./components/CreateStory/CreateStory";
import { Catalog } from "./components/Catalog/Catalog";
import { StoryDetails } from './components/StoryDetails/StoryDetails';
import { EditStory } from './components/EditStory/EditStory';
import { RouteGuard } from './components/common/RouteGuard';        
import { StoryOwner } from './components/common/StoryOwner';

function App() {
    return (
        <AuthProvider>
            <StoryProvider>
                <div id="box">
                    <Navigation />

                    <main id="main-content">
                        <Routes>
                            <Route path='/' element={<Home />} />
                            <Route path='/login' element={<Login />} />
                            <Route path='/register' element={<Register />} />
                            <Route path='/catalog' element={<Catalog />} />
                            <Route path='/catalog/:storyId' element={<StoryDetails />} />

                            <Route element={<RouteGuard />}>
                                <Route path='/catalog/:storyId/edit' element={
                                    <StoryOwner>
                                        <EditStory />
                                    </StoryOwner>
                                } />
                                <Route path='/create' element={<CreateStory />} />
                                <Route path='/logout' element={<Logout />} />
                            </Route>

                            {/* <Route path='/create-story' element={
                            <RouteGuard>
                                <CreateStory onCreateStorySubmit={onCreateStorySubmit} />
                            </RouteGuard>
                        } /> */}
                        </Routes>
                    </main>

                </div>
            </StoryProvider>
        </AuthProvider>
    );
}

export default App;
