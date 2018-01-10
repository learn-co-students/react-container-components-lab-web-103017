// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return (
    <div className="review-list">
      <ul>
        {props.reviews.map((review, i) => <li className="review" key={i}>{review.display_title}</li>)}
      </ul>
    </div>
  );
}

// MovieReviews.propTypes = {
//   reviews: PropTypes.array.isRequired
// }

MovieReviews.defaultProps = {
  reviews: 'review?'
}

export default MovieReviews
