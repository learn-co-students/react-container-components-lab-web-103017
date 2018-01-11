
import React from 'react';

const MovieReviews = (props) => {
  <div className="review-list">
    {reviews.map(review => (
      <div className="review">
        <p>{review.display_title}</p>
      </div>

    ))}
  </div>
}

MovieReviews.defaultProp = {
  reviews: []
}

export default MovieReviews;
