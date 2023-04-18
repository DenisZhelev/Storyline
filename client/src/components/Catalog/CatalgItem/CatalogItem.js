


import { Link } from "react-router-dom";

import useStyles from './styles';

export const CatalogItem = ({ _id, title, imageUrl, preview, ownerUsename }) => {
  const classes = useStyles();

  return (
      <div className={classes.card}>
      <div className={classes.cardImg}>
        <img src={imageUrl}/>
      </div>
      <div className={classes.cardBody}>
        <h2 className={classes.cardTitle}>{title}</h2>
        <p className={classes.cardText}>{preview}</p>
        <p className={classes.cardAuthor}>By {ownerUsename}</p>
      </div>
      <Link to={`/catalog/${_id}`} className={classes.readMore}>Read More</Link>
    </div>
  );
};


