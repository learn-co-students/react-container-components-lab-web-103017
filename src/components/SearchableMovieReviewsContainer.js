// Code SearchableMovieReviewsContainer Here
import React from "react";
import MovieReviews from "./MovieReviews";

const NYT_API_KEY = "13441798edfb443cac4bfc7ded9fef5f";
const URL = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=";
const API = `&api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ""
    };
  }

  searchMovies = () => {
    console.log("searching...");

    fetch(URL + this.state.searchTerm + API)
      .then(resp => resp.json())
      .then(reviews => {
        console.log(reviews.results);
        this.setState({ reviews: [...this.state.reviews, ...reviews.results] });
      });
  };

  handleInput = e => {
    this.setState({ searchTerm: e.target.value });
  };

  render() {
    return (
      <div className="searchable-movie-reviews">
        Searchable movie reviews
        <input onChange={this.handleInput} value={this.state.searchTerm} />
        <MovieReviews
          reviews={this.state.reviews}
          onFetchClick={this.searchMovies}
          fetchText="Click Here to Search"
        />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
