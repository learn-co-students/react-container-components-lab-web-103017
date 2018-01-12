import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'ee6ee6c24164424d8f2142d18eea507a';

export default class SearchableMovieReviewsContainer extends React.Component {

  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: ''
    }
  }

  searchTerm = (ev) => {
    let current = ev.target.value
    this.setState({
      searchTerm: current
    })
  }
  onSubmit = (ev) => {
    ev.preventDefault()

    let search = this.state.searchTerm

    const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' + `query=${search}` + `api-key=${NYT_API_KEY}`

    fetch(`${URL}`)
    .then(resp => resp.json())
    .then(json => this.setState({
      reviews: json.results
      }))
  }

  render() {
    return(
      <div className="searchable-movie-reviews">
        <form>
        <input type="text" onChange={this.searchTerm}/>
        <button onClick={this.onSubmit}>Search!</button>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }
}