// Code SearchableMovieReviewsContainer Here

import React, { Component } from 'react'
import MovieReviews from './MovieReviews'

class SearchableMovieReviewsContainer extends Component{

  constructor(){
    super()
    this.state={
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange(e){
    console.log(e.target.value)
    this.setState({
      searchTerm:e.target.value
    })
  }

  onSubmit(){
    fetch(`https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${this.state.searchTerm}`)
    .then(resp => resp.json())
    .then(reviews => this.setState({reviews:reviews.results}))
  }

  render(){
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.onSubmit}>
          <textarea onChange={this.handleChange}/>
          <button type="submit">Submit</button>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }

}



export default SearchableMovieReviewsContainer
