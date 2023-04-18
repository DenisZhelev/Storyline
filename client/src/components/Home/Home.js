// // import { makeStyles } from '@material-ui/core/styles';

// // const useStyles = makeStyles((theme) => ({
// //   box: {
// //     height: "100%",
// //     display: "flex",
// //     flexDirection: "column",
// //     justifyContent: "center",
// //     alignItems: "center",
// //   },
// //   title: {
// //     textAlign: "center",
// //   },
// //   subtitle: {
// //     textAlign: "center",
// //     fontSize: "1.2rem",
// //   },
// // }));

// // export const Home = () => {
// //   const classes = useStyles();
  
// //   return (
// //     <div className={classes.box}>
// //       <h1 className={classes.title}>Welcome to Storyline</h1>
// //       <p className={classes.subtitle}>A place for every story under the sun</p>
// //     </div>
// //   );
// // }


// //test

// import { useState, useEffect, useCallback, useMemo } from 'react';
// import LatestGame from './LatestGame';

// export const Home = () => {
//     const [latestGames, setLatestGames] = useState([]);

//     useEffect(() => {
//         fetch(`http://localhost:3030/data/games`)
//             .then(res => res.json())
//             .then(result => {
//                 setLatestGames(result.map(x => ({ ...x, rating: 0 })));
//             });
//     }, []);

//     const onLikeClick = useCallback((gameId) => {
//         setLatestGames(state => state.map(x => x._id === gameId ? { ...x, rating: x.rating + 1 } : x));
//     }, [])

//     const result = useMemo(() => {
//         // Slow calculation
//         return 42;
//     }, []);

//     return (
//         <section id="welcome-world">

//             <div className="welcome-message">
//                 <h2>ALL new games are</h2>
//                 <h3>Only in GamesPlay</h3>
//             </div>
//             <img src="./images/four_slider_img01.png" alt="hero" />

//             <div id="home-page">
//                 <h1>Latest Games - {result}</h1>

//                 {latestGames.map(game => <LatestGame key={game._id} {...game} onLikeClick={onLikeClick} />)}

//                 {latestGames.length === 0 && <p className="no-articles">No games yet</p>}
//             </div>
//         </section>
//     );
// }

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   box: {
//     height: "100%",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   title: {
//     textAlign: "center",
//   },
//   subtitle: {
//     textAlign: "center",
//     fontSize: "1.2rem",
//   },
// }));

// export const Home = () => {
//   const classes = useStyles();
  
//   return (
//     <div className={classes.box}>
//       <h1 className={classes.title}>Welcome to Storyline</h1>
//       <p className={classes.subtitle}>A place for every story under the sun</p>
//     </div>
//   );
// }


//test

import { useState, useEffect, useCallback, useMemo } from 'react';
import LatestStory from './LatestStory';

export const Home = () => {
    const [latestStorys, setLatestStorys] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3030/data/storys`)
            .then(res => res.json())
            .then(result => {
                setLatestStorys(result.map(x => ({ ...x, rating: 0 })));
            });
    }, []);

    const onLikeClick = useCallback((storyId) => {
        setLatestStorys(state => state.map(x => x._id === storyId ? { ...x, rating: x.rating + 1 } : x));
    }, [])

    const result = useMemo(() => {
        // Slow calculation
        return 42;
    }, []);

    return (
        <section id="welcome-world">

            <div className="welcome-message">
                <h2>ALL new storys are</h2>
                <h3>Only in StorysPlay</h3>
            </div>
            <img src="./images/four_slider_img01.png" alt="hero" />

            <div id="home-page">
                <h1>Latest Storys - {result}</h1>

                {latestStorys.map(story => <LatestStory key={story._id} {...story} onLikeClick={onLikeClick} />)}

                {latestStorys.length === 0 && <p className="no-articles">No storys yet</p>}
            </div>
        </section>
    );
}