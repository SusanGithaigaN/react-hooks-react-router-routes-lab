import React from "react";
import { directors } from "../data";

function Directors() {
  // map through all directors
  const allDirectors= directors.map(director =>{
    return( 
      // display director's name and movie list
    <div key={director.name}>
      <h2>Director's name: {director.name}</h2> 
      <h4>Movies: </h4>
      <ul>
      {director.movies.map(movie=> <li key={movie}>{movie}</li>)}
      </ul>
    </div>
    )
  })
  return (
     <div>
    <h1>Directors Page</h1>
    {allDirectors}
  </div>
);
  }

export default Directors;
