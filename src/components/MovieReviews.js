// Code MovieReviews Here
import React from 'react'


const MovieReviews = ({reviews}) => (
  <div className="review-list">
    {reviews.map(review => (
      <div className="review">
        <p>{review.display_title}</p>
      </div>

    ))}

  </div>
)

MovieReviews.defaultProps = {reviews: []}

export default MovieReviews;
