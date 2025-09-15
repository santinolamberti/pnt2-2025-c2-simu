import React from 'react';
import MovieCard from './MovieCard';
import './peliculas.css';

export default function MovieList({ movies }) {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} />
      ))}
    </div>
  );
}
