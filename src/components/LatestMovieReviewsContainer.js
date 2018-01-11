import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";

require("es6-promise").polyfill();
require("isomorphic-fetch");

const NYT_API_KEY = "13441798edfb443cac4bfc7ded9fef5f";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/all.json?" +
  `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor() {
    super();

    this.state = {
      reviews: []
    };
  }

  fetchMovies = () => {
    console.log("fetching...");

    fetch(URL)
      .then(resp => resp.json())
      .then(reviews => {
        console.log(reviews.results);
        this.setState({ reviews: [...this.state.reviews, ...reviews.results] });
      });
  };

  render() {
    return (
      <div className="latest-movie-reviews">
        <MovieReviews
          reviews={this.state.reviews}
          onFetchClick={this.fetchMovies}
          fetchText="Click Here to Show All"
        />
      </div>
    );
  }
}

export default LatestMovieReviewsContainer;
