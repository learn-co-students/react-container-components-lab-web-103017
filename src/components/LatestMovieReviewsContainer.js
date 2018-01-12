import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ee6ee6c24164424d8f2142d18eea507a';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
    fetch(`${URL}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      reviews: json.results}))
  }

  render() {
    return <div className="latest-movie-reviews">
    <MovieReviews reviews={this.state.reviews} />
    </div>
  }
} 

export default LatestMovieReviewsContainer;