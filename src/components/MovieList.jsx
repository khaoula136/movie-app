// src/components/MovieList.jsx
import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies }) => {
  return (
    <div className="movie-list">
      {movies.length === 0 ? (
        <p>No movies found</p>
      ) : (
        movies.map((movie) => <MovieCard key={movie.title} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;
