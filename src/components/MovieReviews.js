// Code MovieReviews Here
import React from 'react';



const MovieReviews = (props) => {
  const allReviews = props.reviews && props.reviews.map((review, i) => {
    return <div className="review" key={i}>
              <h2>Title: {review.display_title}</h2>
              <p>By: {review.byline}</p>
              <p>Critics Pick: {review.critics_pick}</p>
              <p>Display Title: {review.display_title}</p>
              <p>Headline: {review.headline}</p>
              <a href={review.link.url} type={review.link.type} target="_blank">Link: {review.link.suggested_link_text}</a>
              <p>Rated: {review.mpaa_rating}</p>
              <p>Multimedia: {}</p>
              <img src={review.multimedia.src} width={review.multimedia.width} height={review.multimedia.height} type={review.multimedia.type} alt="img"/>
              <p>Opening Date: {review.opening_date}</p>
              <p>Publication Date: {review.publication_date}</p>
            </div>
  })


  return <div className="review-list">{allReviews}</div>
}
console.log(this);
MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews;
