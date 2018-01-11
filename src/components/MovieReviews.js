// Code MovieReviews Here

import React from "react";

const MovieReviews = props => {
  return (
    <div className="review-list">
      <button onClick={props.onFetchClick}> {props.fetchText} </button>
      {props.reviews.map(review => {
        return (
          <div className="review">
            <ul>
              <h1>Title: {review.display_title}</h1>
              <h2>{review.headline}</h2>
              <strong>
                {review.mpaa_rating
                  ? `Rated ${review.mpaa_rating}`
                  : "Not Rated"}
              </strong>
              <br />
              {review.critics_pick ? "CRITICS PICK" : null}
              <br />
              By: {review.byline}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

MovieReviews.defaultProps = {
  reviews: [
    {
      display_title: "NO REVIEW",
      headline: "NO REVIEW",
      mpaa_rating: "NO REVIEW",
      byline: "NO REVIEW"
    }
  ]
};

export default MovieReviews;
