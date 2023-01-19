import React from "react";
import { movies } from "../data";

function Movies() {
  // map through all movies
  const allMovies = movies.map(movie=>{
    return(
      // make a <div> for each movie
      <div key={movie.title}>
        <h2>Name:{movie.title}</h2>
        <h4>Time:{movie.time}</h4>
        <h4>Genres: </h4>
        <ul>
        {movie.genres.map(genre => <li key={genre}>{genre}</li>)}
        </ul>
      </div>
    )
  })
  return <div>
  {/* render text */}
    <h1>Movies Page</h1>
    {allMovies}
  </div>
}

export default Movies;
