// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {

  MovieReviews.defaultProps = {
    reviews: props.reviews
  }


  const movieCards = props.reviews.map( movie =>
    <MovieReview
      title={movie.display_title}
      mpaa_rating={movie.mpaa_rating}
      headline={movie.headline}
    />)


  return (
    <div className="review-list">
    {movieCards}
    </div>
  )

}

const MovieReview = (props) => {
  return (
    <div>
    <h1>{props.title}</h1>
    <p>Headline: {props.headline}</p>
    <p>Rated: {props.mpaa_rating}</p>
    </div>
  )

}




export default MovieReviews;
