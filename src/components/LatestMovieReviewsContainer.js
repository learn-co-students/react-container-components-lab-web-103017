import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'ee3618493d8b455aad2d378e3888d7c8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      reviews: []
    }
}
componentDidMount() {
    fetch(`${URL}`)
    .then(resp=>resp.json())
    .then(json=>this.setState({ reviews: json.results }, () => console.log(this.state)))
  }

  render(){
    return(
      <div className="latest-movie-reviews">
      <MovieReviews reviews = {this.state.reviews}/>
      </div>
    )
  }
}





export default LatestMovieReviewsContainer;
