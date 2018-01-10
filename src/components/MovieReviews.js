// Code MovieReviews Here
import React from "react";

const Review = ({ headline }) => {
  return (
    <div className="review">
      <h3> {headline} </h3>
    </div>
  );
};

const MovieReviews = ({ reviews }) => {
  return <div className="review-list">{reviews.map(Review)}</div>;
};

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
