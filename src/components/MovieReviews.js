// Code MovieReviews Here

import React from 'react'


const Review = (review) => {
  return (
    <div className='review' key={review.headline}>
      <h1>{review.display_title}</h1>
      <h3>{review.mpaa_rating}</h3>
      <a className="review-link" href={review.link.url}>{review.headline}</a>
      <br></br>
      <span className="author">{review.byline}</span>
      <blockquote>{review.summary_short}</blockquote>
    </div>
  )
}

// export const MovieReviews = ({ reviews }) => {
//   return (
//   <div className='review-list'>
//     {reviews.map((review, i) =>
//         <Review
//           key = {i}
//           display_title={review.display_title}
//           mpaa_rating={review.mpaa_rating}
//         />
//     )}
//   </div>
//   )
// }

const MovieReviews = ({ reviews }) => {
  return (
  <div className='review-list'>
    {reviews.map(Review)}
  </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews
