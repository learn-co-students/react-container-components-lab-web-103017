// Code SearchableMovieReviewsContainer Here
import React from 'react';
import MovieReviews from './MovieReviews';
import 'isomorphic-fetch';

const NYT_API_KEY = 'd6e72b9d311e4ec6b94e315cfcc55621';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

// function searchApiCall(search) {
//   return fetch(`${BASE_URL}${search}`)
//     .then(response => response.json())
//     .then(response => this.setState({reviews: response.results}))
// }

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }

  }

  handleChange = (event) => {
    this.setState({ searchTerm: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    fetch(`${BASE_URL}${this.state.searchTerm}`)
      .then(response => response.json())
      .then(response => this.setState({reviews: response.results}))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <button>search</button>
        </form>
          <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
