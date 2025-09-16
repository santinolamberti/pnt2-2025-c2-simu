'use client';
import { useState, useEffect } from "react";
import { FaFilm } from 'react-icons/fa';
import Link from 'next/link';
import '../peliculas.css';

function DetalleComponente({id}) {
    const [page, setPage] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(
          `https://mflixbackend.azurewebsites.net/api/movies/${id}`
        );
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error("Error fetching movies:", error);
        setLoading(false);
      }
    }

    fetchMovies();
  },[]);


    return(
        <div className="movie-card">
      {movie.poster? (
        <img 
          src={movie.poster} 
          alt={movie.title} 
          className="movie-poster"
        />
      ) : (
        <div className="movie-fallback">
          <span className="blackIcon"><FaFilm /></span>
          <span className="movie-fallback-text">{movie.title}</span>
        </div>
      )}
      <p className="movie-title">{movie.title}</p>
      <span className="">{movie.fullplot}</span>
    </div>
    )
}

export default DetalleComponente