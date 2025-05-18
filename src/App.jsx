import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MovieList from "./components/MovieList";
import Filter from "./components/Filter";
import MovieDetail from "./components/MovieDetail";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([
    {
      id: 1,
      title: "Inception",
      description: "A mind-bending thriller by Christopher Nolan.",
      posterURL: "/images/inception.jpg",
      rating: 8.8,
      trailer: "https://www.youtube.com/embed/YoHD9XEInc0",
    },
    {
      id: 2,
      title: "The Dark Knight",
      description: "A dark and gritty superhero film by Christopher Nolan.",
      posterURL: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
      rating: 9.0,
      trailer: "https://www.youtube.com/embed/EXeTwQWrcwY",
    },
  ]);

  const [filterTitle, setFilterTitle] = useState("");
  const [filterRating, setFilterRating] = useState("");

  const addMovie = (newMovie) => {
    setMovies((prevMovies) => [
      ...prevMovies,
      { ...newMovie, id: prevMovies.length + 1 },
    ]);
  };

  const filteredMovies = movies.filter((movie) => {
    return (
      movie.title.toLowerCase().includes(filterTitle.toLowerCase()) &&
      (filterRating ? movie.rating >= filterRating : true)
    );
  });

  return (
    <Router>
      <div className="app">
        <h1>My Movie App</h1>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Filter setFilterTitle={setFilterTitle} setFilterRating={setFilterRating} />
                <MovieList movies={filteredMovies} />
                <button
                  onClick={() =>
                    addMovie({
                      title: "Interstellar",
                      description: "A visually stunning sci-fi drama.",
                      posterURL:
                        "https://image.tmdb.org/t/p/w500/rAiYTfZb3zC4P6H8pLzXyfoyS45.jpg",
                      rating: 8.6,
                      trailer: "https://www.youtube.com/embed/zSWdZVtXT7E",
                    })
                  }
                >
                  Add Movie
                </button>
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
