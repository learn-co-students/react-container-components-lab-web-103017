import React from 'react';

const MovieReviews = ({reviews}) =>  (
  <div className="review-list">
    {reviews.map(review => (
      <div className="review">
      {review.display_title}
      </div>
    ))}
  </div>
)

MovieReviews.defaultProps = {
reviews: [],
};


export default MovieReviews;

//
// import React from 'react';
//
// const Review = ({
//   headline,
//   byline,
//   link,
//   summary_short
// }) => {
//   return (
//
//     <div
//       key={headline}
//       className="review"
//     >
//       <header>
//         <a
//           className="review-link"
//
//           href={link.url}
//         >
//           {headline}
//         </a>
//         <br/>
//         <span className="author">{byline}</span>
//       </header>
//       <blockquote>{summary_short}</blockquote>
//     </div>
//   );
// };
//
// const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;
//
// MovieReviews.defaultProps = {
//   reviews: []
// };
//
// export default MovieReviews;
