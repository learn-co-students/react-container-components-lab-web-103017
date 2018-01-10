// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

// const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
// const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
//             + `api-key=${NYT_API_KEY}&query=${}`;


class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    }
  }

  componentDidMount(searchTerm) {
    const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                + `api-key=${NYT_API_KEY}&query=${searchTerm}`;
    fetch(URL)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }


  formListener = e => {
    this.setState({searchTerm: e.target.value}, this.componentDidMount(this.state.searchTerm))
  }


  render() {
    return (
      <div className="searchable-movie-reviews">
        <h1> Search some stuff!! </h1>
        <form>
          <input onChange={this.formListener} type="text" />
          <MovieReviews reviews={this.state.reviews} />
        </form>
    </div>
    )

  }

}


export default SearchableMovieReviewsContainer;
