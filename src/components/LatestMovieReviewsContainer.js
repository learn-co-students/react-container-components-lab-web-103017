import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a43da7b5a0b4420696085a3751e73fba';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
export default class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    }
  }

  componentDidMount() {
  fetch(URL).then(response => response.json())
    .then(response => response.results)
      .then(reviews => this.setState({ reviews }))
  }

  render() {
    return (
      <div className='latest-movie-reviews'>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}
