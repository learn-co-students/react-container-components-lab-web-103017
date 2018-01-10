import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'd6e72b9d311e4ec6b94e315cfcc55621';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: []
    }

  }

  componentDidMount() {
  fetch(URL)
    .then(response => response.json())
    .then((reviews => this.setState({ reviews: reviews.results })
      )
    )
  }

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
