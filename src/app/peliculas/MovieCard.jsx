import React, { useState } from 'react';
import './peliculas.css';

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="movie-card">
      {movie.poster && !imageError ? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-poster"
          onError={handleImageError}
        />
      ) : (
        <div className="movie-fallback">
          <span className="movie-fallback-text">{movie.title}</span>
        </div>
      )}
      <p className="movie-title">{movie.title}</p>
    </div>
  );
}