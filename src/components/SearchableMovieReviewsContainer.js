// Code SearchableMovieReviewsContainer Here
import React from 'react'
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'a43da7b5a0b4420696085a3751e73fba';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  updateSearchTerm = (event) => {
    this.setState({ searchTerm: event.target.value}, () => console.log(this.state.searchTerm))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(1)
    fetch(URL + this.state.searchTerm).then(res => res.json())
    .then(response => response.results)
      .then(reviews => this.setState({ reviews }))
  }


  render() {
  return (
    <div className="searchable-movie-reviews">
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="searchTerm"value={this.state.searchTerm} onChange={this.updateSearchTerm}></input>
        <br></br>
        <button type="submit">Search</button>
      </form>
      { this.state.reviews.length ?<div><h2>Searched Movies</h2><MovieReviews reviews={this.state.reviews} /><h2>----------</h2></div> : null}


    </div>
  )
}
}
