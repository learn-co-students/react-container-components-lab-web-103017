// Code SearchableMovieReviewsContainer Here
import React from 'react'

class SearchableMovieReviewsContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: [],
      searchTerm: ""
    }

  }

  componentDidMount(searchTerm) {
    const NYT_API_KEY = 'd6e72b9d311e4ec6b94e315cfcc55621';
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchTerm}`
                + `api-key=${NYT_API_KEY}`;
  fetch(URL)
    .then(response => response.json())
    .then((reviews => this.setState({ reviews: reviews.results })
      )
    )
  }

  handleSubmit(e) {
    e.preventDefault()

  }

  handleChange(e) {
    this.setState({
      searchTerm: e.target.value
    }, this.componentDidMount(this.state.searchTerm))
  }

  render() {



    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
          <input type="text" onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
        <div>
        {this.state.reviews.map(review => (
          <div className="review">
            <p>{review.display_title}</p>
          </div>

        ))}
        </div>
      </div>
    );
  }

}

export default SearchableMovieReviewsContainer;
