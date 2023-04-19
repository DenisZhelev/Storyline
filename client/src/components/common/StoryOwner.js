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