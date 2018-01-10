// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      {props.reviews.map(r => {
        return <div className="review">{r.display_title}</div>
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
