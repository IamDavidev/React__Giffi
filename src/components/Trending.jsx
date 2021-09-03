import React from "react";
import { Link } from "wouter";
import "./Gif.css";

function Trending({  options }) {
  return (
    <div className="Trending__search">
      <h2>Trending</h2>
      <ul>
        {options.map((singleTrending) => (
          <li key={singleTrending}>
            <Link className="Trending__Link" to={`/Gif/:${singleTrending}`}>
              {singleTrending}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Trending