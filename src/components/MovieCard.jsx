// src/components/MovieCard.jsx
import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.posterURL} alt={movie.title} className="movie-card__image" />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <div className="movie-card__rating">Rating: {movie.rating}</div>
    </div>
  );
};

export default MovieCard;
