import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`/movie/${movie.id}`} style={{ textDecoration: "none", color: "inherit" }}>
      <div style={{ border: "1px solid #ccc", margin: 10, padding: 10, width: 200, cursor: "pointer" }}>
        <img src={movie.posterURL} alt={movie.title} style={{ width: "100%" }} />
        <h3>{movie.title}</h3>
        <p>Rating: {movie.rating}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
