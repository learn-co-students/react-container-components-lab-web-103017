import React from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'


const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}&query=`;

export default class SearchableMovieReviewsContainer extends React.Component {
  constructor() {
    super();

    this.state = {
      reviews: [],
      searchTerm: '',
    }
  }

  handleChange = (event) => {
    // event.preventDefault()
    this.setState({
      searchTerm: event.target.value
    });
  }

  componentDidMount() {
    fetch(BASE_URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({
      reviews: json.results
    }));
  }


  handleClick = (event) => {
    event.preventDefault()
    fetch(BASE_URL + this.state.searchTerm)
      .then(resp => resp.json())
      .then(json => this.setState({
        reviews: json.results
      }));
  }

  render() {
    console.log("Searchable State", this.state);
    return(
      <div className="searchable-movie-reviews">
        <form onChange={this.handleChange} >
          <label >Search:</label>
          <input id="search-term" placeholder="Search..." value={this.state.searchTerm}></input>
          <button onClick={this.handleClick}>Submit</button>
        </form>
        <div>I'm Searchable</div>
        <MovieReviews reviews={this.state.reviews}/>
      </div>

    );
  }
}
