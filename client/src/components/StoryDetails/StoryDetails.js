
import { useEffect, useState, useReducer } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Card, CardHeader, Typography } from '@material-ui/core';

import { storyServiceFactory } from '../../services/storyService';
import * as commentService from '../../services/commentService';
import { useService } from '../../hooks/useService';
import { useAuthContext } from '../../contexts/AuthContext';
import { Delete, Edit } from '@material-ui/icons';

import { IconButton } from '@material-ui/core';
import { AddComment } from './AddComment/AddComment';
import { storyReducer } from '../../reducers/storyReducer';
import { useStoryContext } from '../../contexts/StoryContext';

export const StoryDetails = () => {
  const { storyId } = useParams();
  const { userId, isAuthenticated, userEmail, username } = useAuthContext();
  const { deleteStory } = useStoryContext();
  const [story, dispatch] = useReducer(storyReducer, {});
  const storyService = useService(storyServiceFactory);
  const navigate = useNavigate();

  useEffect(() => {
    Promise.all([storyService.getOne(storyId), commentService.getAll(storyId)])
      .then(([storyData, comments]) => {
        const storyState = {
          ...storyData,
          comments,
        };

        dispatch({ type: 'STORY_FETCH', payload: storyState });
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
    const result = window.confirm(`Are you sure you want to delete ${story.title}`);

    if (result) {
      await storyService.delete(story._id);

      deleteStory(story._id);

      navigate('/catalog');
    }
  };

  return (
    <section id="story-details">
      <Typography variant="h4">Story Details</Typography>
      <Card>
        <CardHeader title={story.title} subheader={`By: ${story.ownerUsername}`} />
        {isOwner && (
          <div className="buttons">
            <div className="buttons">
        <Link to={`/catalog/${story._id}/edit`}>
            <IconButton>
             <Edit />
             </IconButton>
          </Link>
         <IconButton onClick={onDeleteClick}>
      <Delete />
    </IconButton>
  </div>
          </div>
        )}
        <img  src={story.imageUrl} alt={story.title} />
        <Typography variant="h5">Category: {story.category}</Typography>
        <Typography variant="h6">{story.preview}</Typography>
        <Typography variant="body1">{story.story}</Typography>
        <div>
          <Typography variant="h6">Comments:</Typography>
          <ul>
            {story.comments && story.comments.map((x) => (
              <li key={x._id}>
                <Typography variant="body1">{`${x.author.username}: ${x.comment}`}</Typography>
              </li>
            ))}
          </ul>
          {!story.comments?.length && (
            <Typography variant="body1">No comments.</Typography>
          )}
        </div>
      </Card>
      {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit} />}
    </section>
  );
};

