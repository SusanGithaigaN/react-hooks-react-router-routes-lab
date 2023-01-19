import React from "react";
import { actors } from "../data";

function Actors() {
  const allActors = actors.map(actor =>{
    return(
      // make a new <div> fro each actor
      <div key={actor.name}>
      <h2>Actor's name: {actor.name}</h2>
      <h4>Actors: </h4>
      <ul>
        {actor.movies.map(movie =><li key={movie}>{movie}</li>)}
      </ul>
      </div> 
    )
  })
  return <div>
  {/* render text */}
    <h1>Actors Page</h1>
    {allActors}
  </div>;
}

export default Actors;
