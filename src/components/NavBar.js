import React from "react";
import { NavLink, Switch } from "react-router-dom";
import Movies from "./Movies"
import Directors from "./Directors"
import Actors from "./Actors"
import Home from "./Home"

function NavBar() {
  return (<ul>

    <li>
      <NavLink to="/">
        Home
      </NavLink>
    </li>

    <li>
      <NavLink to="/movies">
        Movies
      </NavLink>
    </li>

    <li>
      <NavLink to="/directors">
        Directors
      </NavLink>
    </li>

    <li>
      <NavLink to="/actors">
        Actors
      </NavLink>
    </li>

  </ul>);
}

export default NavBar;
