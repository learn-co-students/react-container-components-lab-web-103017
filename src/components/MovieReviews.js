import React from 'react';

const MovieReviews = (props) => {
  return (
  <div className="review-list">
    {props.reviews.map( review => {
      return <div className="review">
      <img src={review.multimedia.src} />
      <h2>{review.headline}</h2>
      </div>
    })}
  </div>)}

  MovieReviews.defaultProps = {
    reviews: []
  }

export default MovieReviews;