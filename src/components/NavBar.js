import React from "react";
import { BrowserRouter, NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">
    {/* render NavLink components */}
    <NavLink exact to="/">Home</NavLink>
    <NavLink to="/movies">Movies</NavLink>
    <NavLink to="/directors">Directors</NavLink>
    <NavLink to="/actors">Actors</NavLink>
  

  </div>;
}

export default NavBar;

