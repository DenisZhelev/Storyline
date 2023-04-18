// import { useGameContext } from "../../contexts/StoryContext";
// import { CatalogItem } from "./CatalgItem/CatalogItem";

// import useStyles from './CatalgItem/styles';

// export const Catalog = () => {
//   const classes = useStyles();
//   const { games } = useGameContext();

//   return (
//     <section id="catalog-page">
//       <h1>All Games</h1>
//       <div className={classes.container}>
//          <div className={classes.grid}>
//         {games.map((game) => (
//           <CatalogItem key={game._id} {...game} />
//         ))}
//       </div>
//         </div>
//       {games.length === 0 && <h3 className="no-articles">No articles yet</h3>}
//     </section>
//   );
// };

import { useStoryContext } from "../../contexts/StoryContext";
import { CatalogItem } from "./CatalgItem/CatalogItem";

import useStyles from './CatalgItem/styles';

export const Catalog = () => {
  const classes = useStyles();
  const { storys } = useStoryContext();

  return (
    <section id="catalog-page">
      <h1>All Storys</h1>
      <div className={classes.container}>
         <div className={classes.grid}>
        {storys.map((story) => (
          <CatalogItem key={story._id} {...story} />
        ))}
      </div>
        </div>
      {storys.length === 0 && <h3 className="no-articles">No articles yet</h3>}
    </section>
  );
};