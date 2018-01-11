import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = '7f289742dbde4ffeb2db76cfd7a03520';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component {

  constructor () {
    super()

    this.state = {
      reviews: []
    }
  }

  componentDidMount(){
    this.getLatestReviews()
  }


  getLatestReviews(){
    fetch(URL).then(resp => resp.json()).then(json => {this.setState({reviews: json.results})})
    //
  }

  render(){
    return(<div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews}/></div>)
  }

}

export default LatestMovieReviewsContainer
