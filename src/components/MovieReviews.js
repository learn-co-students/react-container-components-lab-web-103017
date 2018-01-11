// Code MovieReviews Here
import React from 'react'
const MovieReviews = (props) => {

  console.log(props.reviews)
  return (<div className="review-list">{props.reviews.map(r => <p className="review">{r.display_title}</p>)}</div>)


}
MovieReviews.defaultProps = {
  reviews: "reviews"
}
export default MovieReviews
