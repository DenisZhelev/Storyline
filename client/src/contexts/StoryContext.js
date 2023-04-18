// import { createContext, useState, useEffect, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { gameServiceFactory } from '../services/storyService';

// export const GameContext = createContext();

// export const GameProvider = ({
//     children,
// }) => {
//     const navigate = useNavigate();
//     const [games, setGames] = useState([]);
//     const gameService = gameServiceFactory();

//     useEffect(() => {
//         gameService.getAll()
//             .then(result => {
//                 setGames(result)
//             })
//     }, []);

//     const onCreateGameSubmit = async (data) => {
//         const newGame = await gameService.create(data);

//         setGames(state => [...state, newGame]);

//         navigate('/catalog');
//     };

//     const onGameEditSubmit = async (values) => {
//         const result = await gameService.edit(values._id, values);

//         setGames(state => state.map(x => x._id === values._id ? result : x))

//         navigate(`/catalog/${values._id}`);
//     };

//     const deleteGame = (gameId) => {
//         setGames(state => state.filter(game => game._id !== gameId));
//     };

//     const getGame = (gameId) => {
//         return games.find(game => game._id === gameId);
//     };

//     const contextValues = {
//         games,
//         onCreateGameSubmit,
//         onGameEditSubmit,
//         deleteGame,
//         getGame,
//     };

//     return (
//         <GameContext.Provider value={contextValues}>
//             {children}
//         </GameContext.Provider>
//     );
// };

// export const useGameContext = () => {
//     const context = useContext(GameContext);

//     return context;
// };



import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { storyServiceFactory } from '../services/storyService';

export const StoryContext = createContext();

export const StoryProvider = ({
    children,
}) => {
    const navigate = useNavigate();
    const [storys, setStorys] = useState([]);
    const storyService = storyServiceFactory();

    useEffect(() => {
        storyService.getAll()
            .then(result => {
                setStorys(result)
            })
    }, []);

    const onCreateStorySubmit = async (data) => {
        const newStory = await storyService.create(data);

        setStorys(state => [...state, newStory]);

        navigate('/catalog');
    };

    const onStoryEditSubmit = async (values) => {
        const result = await storyService.edit(values._id, values);

        setStorys(state => state.map(x => x._id === values._id ? result : x))

        navigate(`/catalog/${values._id}`);
    };

    const deleteStory = (storyId) => {
        setStorys(state => state.filter(story => story._id !== storyId));
    };

    const getStory = (storyId) => {
        return storys.find(story => story._id === storyId);
    };

    const contextValues = {
        storys,
        onCreateStorySubmit,
        onStoryEditSubmit,
        deleteStory,
        getStory,
    };

    return (
        <StoryContext.Provider value={contextValues}>
            {children}
        </StoryContext.Provider>
    );
};

export const useStoryContext = () => {
    const context = useContext(StoryContext);

    return context;
};