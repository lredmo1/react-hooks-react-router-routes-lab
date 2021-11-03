import React from "react";
import { movies } from "../data";

function Movies() {
  return (<div>
    <h1>Movies Page</h1>
    <div>
      <h2>Title: "Doctor Strange"</h2>
      <p>Time: 115</p>
      <p>Genres:
        <ul>
          <li>Action</li>
          <li>Adventure</li>
          <li>Fantasy</li>
        </ul></p>
    </div>
  </div>);
}

export default Movies;
