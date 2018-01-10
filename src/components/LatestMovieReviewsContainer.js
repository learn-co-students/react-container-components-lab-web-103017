import React, { Component } from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';
require('es6-promise').polyfill();




const NYT_API_KEY = '73a3f0c45ef14622a3f8c638d54dc4fd';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  componentWillMount() {
    fetch(URL)
    	.then(function(response) {
    		if (response.status >= 400) {
    			throw new Error("Bad response from server");
    		}
    		return response.json();
    	})
      .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    return <div className="latest-movie-reviews">
      <MovieReviews reviews={this.state.reviews} />
    </div>
  }
}

export default LatestMovieReviewsContainer;
