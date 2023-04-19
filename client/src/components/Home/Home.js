import { useState, useEffect, useCallback, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LatestStory from './LatestStory';

import useStyles from './styles';

export const Home = () => {
  const classes = useStyles();

  const [latestStories, setLatestStories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3030/data/storys`)
      .then(res => res.json())
      .then(result => {
        setLatestStories(result.map(x => ({ ...x, rating: 0 })));
      });
  }, []);

  const onLikeClick = useCallback((storyId) => {
    setLatestStories(state => state.map(x => x._id === storyId ? { ...x, rating: x.rating + 1 } : x));
  }, [])

  const latestThreeStories = useMemo(() => {
    return latestStories.slice(0, 3);
  }, [latestStories]);

  return (
    <section id="welcome-world">
      <div className={classes.welcomeMessage}>
        <h2 className={classes.welcomeTitle}>Welcome to Storyline</h2>
        <p className={classes.welcomeSubtitle}>A place for every story under the sun</p>
      </div>

      <div id="home-page">
        {/* <h1>Latest Stories</h1> */}

        {/* <div className={classes.latestStoriesContainer}>
          {latestThreeStories.map(story => <LatestStory key={story._id} {...story} onLikeClick={onLikeClick} />)}
        </div> */}

        {latestStories.length === 0 && <p className="no-articles">No stories yet</p>}
      </div>
    </section>
  );
}
