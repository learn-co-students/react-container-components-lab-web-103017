import React from 'react';

const MovieReviews = (props) =>  {

  return (
    <div className="review-list">
      {props.reviews.map(review => {
        return <div className="review">
          <h1> {review.headline} </h1>
          <p>{review.summary_short}</p>
        </div>
      })}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}


export default MovieReviews;
