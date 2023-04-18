// import { useParams, Outlet, Navigate } from 'react-router-dom';
// import { useAuthContext } from '../../contexts/AuthContext';

// import { useGameContext } from "../../contexts/StoryContext";

// export const GameOwner = ({
//     children,
// }) => {
//     const { gameId } = useParams();
//     const { getGame } = useGameContext();
//     const { userId } = useAuthContext();

//     const currentGame = getGame(gameId);

//     if (currentGame && currentGame._ownerId !== userId) {
//         return <Navigate to={`/catalog/${gameId}`} replace />
//     }

//     return children ? children : <Outlet />
// };

import { useParams, Outlet, Navigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

import { useStoryContext } from "../../contexts/StoryContext";

export const StoryOwner = ({
    children,
}) => {
    const { storyId } = useParams();
    const { getStory } = useStoryContext();
    const { userId } = useAuthContext();

    const currentStory = getStory(storyId);

    if (currentStory && currentStory._ownerId !== userId) {
        return <Navigate to={`/catalog/${storyId}`} replace />
    }

    return children ? children : <Outlet />
};