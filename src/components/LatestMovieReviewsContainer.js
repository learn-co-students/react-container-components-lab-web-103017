import React, { Component } from 'react';
import 'isomorphic-fetch';

const NYT_API_KEY = 'ee3618493d8b455aad2d378e3888d7c8';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
  constructor(props){
    super();

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
          {this.state.reviews.map(movie => <div className="movie" /*key={movie.display_title}*/>
          <h3>{movie.display_title}</h3>
          <p>Byline:{movie.byline}</p>
          <p>Critics pick:{movie.critics_pick}</p>
          <p>Updated date:{movie.date_updated}</p>
          <a href={movie.link.url}>{movie.link.suggested_link_text}</a>
          <br/>
          <img src={movie.multimedia.src} alt=""></img>
          <p>Opening date:{movie.opening_date}</p>
          <p>Summary:{movie.summary_short}</p>

          </div>)}
      </div>
    )
  }
}





export default LatestMovieReviewsContainer;
