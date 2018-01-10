// Code MovieReviews Here

import React from 'react'

const MovieReviews = (props)=> {
  return (
    <div className="review-list">
      {props.reviews.map(review => {
        return <p className="review"> review </p>
      })}
    </div>
  )
}

MovieReviews.defaultProps = {reviews: []}


export default MovieReviews
