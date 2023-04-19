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
import { User } from './components/User/User';
import bakImage from "./images/bak.jpg";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(${bakImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      },
    }));


function App() {
    const classes = useStyles();
    return (
        <AuthProvider>
            <StoryProvider>
                <div className={classes.root}>
                    <Navigation />

                    <main>
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
                                <Route path='/user/:userId' element={<User />} />
                            </Route>
                        </Routes>
                    </main>

                </div>
            </StoryProvider>
        </AuthProvider>
    );
}

export default App;
