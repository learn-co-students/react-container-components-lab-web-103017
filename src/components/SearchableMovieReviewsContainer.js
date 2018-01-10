// Code SearchableMovieReviewsContainer Here
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component{
  constructor(){
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
    this.componentWillMount = this.componentWillMount.bind(this);
  }

  componentWillMount() {
    fetch(`${URL}${this.state.searchTerm}`)
      .then(response => response.json())
      .then(obj => this.setState({ reviews: obj.results }));
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.componentWillMount();

  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <input onChange={e => {this.setState({searchTerm: e.target.value})}}></input>
          <button type="submit">Search Movies</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}

export default SearchableMovieReviewsContainer;
