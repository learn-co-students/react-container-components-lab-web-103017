
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'
// Code SearchableMovieReviewsContainer Here
const NYT_API_KEY = '7f289742dbde4ffeb2db76cfd7a03520';




class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: "",
    }
  }

  updateTextBox = (event) => {
    this.setState({searchTerm: event.target.value})
  }

  handleClick = (event) => {
    let SEARCH_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?' + this.state.searchTerm + `?api-key=${NYT_API_KEY}`
    console.log(SEARCH_URL)
    fetch(SEARCH_URL).then(resp => resp.json()).then(json => { this.setState({reviews: json.results})})

  }
  render(){
    return (<div className="searchable-movie-reviews"><div><input type="text" value={this.state.searchTerm} onChange={this.updateTextBox} /><button onClick={this.handleClick}>Search</button> </div><div>{this.state.reviews.map(r => <p className="review">{r.display_title}</p>)}</div></div>)

  }

}

export default SearchableMovieReviewsContainer


/*
import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends React.Component {

  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }
  render(){
    return (<div className="searchable-movie-reviews">{this.state.reviews.map(r => <p className="review">{r.display_title}</p>)}</div>)

  }

}

export default SearchableMovieReviewsContainer
*/
