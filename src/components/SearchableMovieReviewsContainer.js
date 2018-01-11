// Code SearchableMovieReviewsContainer Here
import React from 'react';


class SearchableMovieReviewsContainer extends React.Component{
  constructor(){
    super()
    this.state = {
      reviews: [],
      searchTerm: ''
    }

  }


  handleChange = (event) =>  {
    const searchedMovie = event.target.value
    console.log(searchedMovie);
    const NYT_API_KEY = 'ee3618493d8b455aad2d378e3888d7c8';
    const URL = `https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=${searchedMovie}`
    + `api-key=ee3618493d8b455aad2d378e3888d7c8`;
    this.setState({
      searchTerm: `${searchedMovie}`
    }, () => fetch(URL)
    .then(resp=>resp.json())
    .then(json=> console.log("after search term", json))
    )
  }


  render(){
    return (
       <div className="searchable-movie-reviews">
         <form onSubmit={(e) => e.preventDefault}>
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

export default SearchableMovieReviewsContainer
