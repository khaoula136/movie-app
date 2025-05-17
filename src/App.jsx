// src/App.jsx
import React, { useState } from "react";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import "./App.css";  // Styles spécifiques à l'app

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "/images/inception.jpg",  
      rating: 8.8,
    },
    {
      title: "The Dark Knight",
      description: "A dark and gritty superhero film by Christopher Nolan.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9.0,
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [...prevMovies, newMovie]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
    );
  });

  return (
    <div className="app">
      <h1>My Movie App</h1>
      <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
      <MovieList movies={filteredMovies} />
      <button
        onClick={() =>
          addMovie({
            title: "Interstellar",
            description: "A visually stunning sci-fi drama.",
            posterURL: "https://image.tmdb.org/t/p/w500/rAiYTfZb3zC4P6H8pLzXyfoyS45.jpg",
            rating: 8.6,
          })
        }
      >
        Add Movie
      </button>
    </div>
  );
};

export default App;
