// src/components/Filter.jsx
import React from "react";

const Filter = ({ setFilterTitle, setFilterRating }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Filter by title"
        onChange={(e) => setFilterTitle(e.target.value)}
        className="filter__input"
      />
      <input
        type="number"
        placeholder="Filter by rating"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        className="filter__input"
      />
    </div>
  );
};

export default Filter;
