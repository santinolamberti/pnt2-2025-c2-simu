import React, { useState } from 'react';
import './peliculas.css';
import { FaFilm, FaHeart } from 'react-icons/fa';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'

export default function MovieCard({ movie }) {
  const [imageError, setImageError] = useState(false);
  const [favorito, setFavorito] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleFavoritoClick = () => {
    setFavorito(!favorito)
  }

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
          <span className="blackIcon"><FaFilm /></span>
          {/* <span className="movie-fallback-text">{movie.title}</span> */}
        </div>
      )}
      <p className="movie-title">{movie.title}</p>
      {/* <span className="">{movie.fullplot}</span> */}
      <button><Link href={`peliculas/${movie._id}`}> Detalle </Link></button>
      <button onClick={handleFavoritoClick}>
        {<FontAwesomeIcon icon={favorito ? solidHeart : regularHeart} />}
        </button>
        
    </div>
  );
}