import React, { Component } from 'react';
import 'isomorphic-fetch';
import  MovieReviews from './MovieReviews';

const NYT_API_KEY = '0f016c2a00784a978bdadaaa1ce8d450';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

class LatestMovieReviewsContainer extends Component{
  constructor(props){
    super(props)

    this.state = {
      reviews: []
    }



  }

  componentDidMount(){
    fetch(URL)
    .then(res => res.json())
    .then(json => this.setState({reviews:json.results}));
  }




  render(){
    console.log("rendered LatestMovieReviewsContainer")
    return(
      <div className="latest-movie-reviews">
        <MovieReviews
        reviews={this.state.reviews} />
      </div>
  )
  }
}


export default LatestMovieReviewsContainer;
