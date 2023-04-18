

import { memo } from 'react';
import { Link } from 'react-router-dom';

const LatestStory = ({
    _id,
    imageUrl,
    title,
    rating,
    onLikeClick,
}) => {
    let stars = [];
    for (let i = 0; i < rating; i++) {
        stars.push(<span>☆</span>);
    }

    return (
        <div key={_id} className="story card">
        <div className="card-image-wrap">
            <img src={imageUrl} className="card-image" />
        </div>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <div className="card-rating">
                {stars}
            </div>
            <div className="card-actions">
                <Link to={`/catalog/${_id}`} className="card-link">Details</Link>
                <button className="card-like-btn" onClick={() => onLikeClick(_id)}>Like</button>
            </div>
        </div>
    </div>
    );
}

export default memo(LatestStory);