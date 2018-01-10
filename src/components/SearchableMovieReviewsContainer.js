// Code SearchableMovieReviewsContainer Here

import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: "",
      reviews: []
    };
  }

  handleChange = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    fetch(
      `https://api.nytimes.com/svc/movies/v2/reviews/all.json?query=&${
        this.state.searchTerm
      }&api-key=d6e72b9d311e4ec6b94e315cfcc55621`
    )
      .then(resp => resp.json())
      .then(resp => this.setState({ reviews: resp.results }));
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button />
        </form>
        {this.state.reviews.length > 0}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
export default SearchableMovieReviewsContainer;
