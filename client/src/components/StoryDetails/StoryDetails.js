
// // //tets 
// import { useEffect, useState, useReducer } from 'react';
// import { useParams, useNavigate, Link } from 'react-router-dom';

// import { gameServiceFactory } from '../../services/storyService';
// import * as commentService from '../../services/commentService';
// import { useService } from '../../hooks/useService';
// import { useAuthContext } from '../../contexts/AuthContext';

// import { AddComment } from './AddComment/AddComment';
// import { gameReducer } from '../../reducers/storyReducer';
// import { useGameContext } from '../../contexts/StoryContext';


// export const GameDetails = () => {
//     const { gameId } = useParams();
//     const { userId, isAuthenticated, userEmail } = useAuthContext();
//     const { deleteGame } = useGameContext();
//     const [game, dispatch] = useReducer(gameReducer, {});
//     const gameService = useService(gameServiceFactory)
//     const navigate = useNavigate();

//     useEffect(() => {
//         Promise.all([
//             gameService.getOne(gameId),
//             commentService.getAll(gameId),
//         ]).then(([gameData, comments]) => {
//             const gameState = {
//                 ...gameData,
//                 comments,
//             };
            
//             dispatch({type: 'GAME_FETCH', payload: gameState})
//         });
//     }, [gameId]);

//     const onCommentSubmit = async (values) => {
//         const response = await commentService.create(gameId, values.comment);

//         dispatch({
//             type: 'COMMENT_ADD',
//             payload: response,
//             userEmail,
//         });
//     };

//     const isOwner = game._ownerId === userId;

//     const onDeleteClick = async () => {
//         // eslint-disable-next-line no-restricted-globals
//         const result = confirm(`Are you sure you want to delete ${game.title}`);

//         if (result) {
//             await gameService.delete(game._id);

//             deleteGame(game._id);

//             navigate('/catalog');
//         }
//     };

//     return (
//         <section id="game-details">
//             <h1>Game Details</h1>
//             <div className="info-section">

//                 <div className="game-header">
//                     <img className="game-img" src={game.imageUrl} />
//                     <h1>{game.title}</h1>
//                     <span className="levels">MaxLevel: {game.maxLevel}</span>
//                     <p className="type">{game.category}</p>
//                 </div>

//                 <p className="text">{game.summary}</p>

//                 <div className="details-comments">
//                     <h2>Comments:</h2>
//                     <ul>
//                         {game.comments && game.comments.map(x => (
//                             <li key={x._id} className="comment">
//                                 <p>{x.author.email}: {x.comment}</p>
//                             </li>
//                         ))}
//                     </ul>

//                     {!game.comments?.length && (
//                         <p className="no-comment">No comments.</p>
//                     )}
//                 </div>

//                 {isOwner && (
//                     <div className="buttons">
//                         <Link to={`/catalog/${game._id}/edit`} className="button">Edit</Link>
//                         <button className="button" onClick={onDeleteClick}>Delete</button>
//                     </div>
//                 )}
//             </div>

//             {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
//         </section>
//     );
// };

import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';

import { storyServiceFactory } from '../../services/storyService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';

import { AddComment } from './AddComment/AddComment';
import { storyReducer } from '../../reducers/storyReducer';
import { useStoryContext } from '../../contexts/StoryContext';


export const StoryDetails = () => {
    const { storyId } = useParams();
    const { userId, isAuthenticated, userEmail, username} = useAuthContext();
    const { deleteStory } = useStoryContext();
    const [story, dispatch] = useReducer(storyReducer, {});
    const storyService = useService(storyServiceFactory)
    const navigate = useNavigate();

    useEffect(() => {
        Promise.all([
            storyService.getOne(storyId),
            commentService.getAll(storyId),
        ]).then(([storyData, comments]) => {
            const storyState = {
                ...storyData,
                comments,
            };
            
            dispatch({type: 'STORY_FETCH', payload: storyState})
        });
    }, [storyId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(storyId, values.comment);

        dispatch({
            type: 'COMMENT_ADD',
            payload: response,
            userEmail,
            username,
        });
    };

    const isOwner = story._ownerId === userId;

    const onDeleteClick = async () => {
        // eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${story.title}`);

        if (result) {
            await storyService.delete(story._id);

            deleteStory(story._id);

            navigate('/catalog');
        }
    };
    console.log(isOwner)
    return (
        <section id="story-details">
            <h1>Story Details</h1>
            <div className="info-section">

                <div className="story-header">
                    <img className="story-img" src={story.imageUrl} />
                    <h1>{story.title}</h1>
                    <p className="writenBy"> By: {story.ownerUsename}</p>
                    <p className="type">{story.category}</p>
                    <h5 className="preview">{story.preview}</h5>
              
                </div>

                <p className="text">{story.story}</p>

                <div className="details-comments">
                    <h2>Comments:</h2>
                    <ul>
                        {story.comments && story.comments.map(x => (
                            <li key={x._id} className="comment">
                                <p>{x.author.username}: {x.comment}</p>
                            </li>
                        ))}
                    </ul>

                    {!story.comments?.length && (
                        <p className="no-comment">No comments.</p>
                    )}
                </div>
                {isOwner && (
                    <div className="buttons">
                        <Link to={`/catalog/${story._id}/edit`} className="button">Edit</Link>
                        <button className="button" onClick={onDeleteClick}>Delete</button>
                    </div>
                )}
            </div>

            {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
        </section>
    );
};