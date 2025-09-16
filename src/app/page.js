'use client';

import Image from "next/image";
import { useState, useEffect } from 'react';
import MovieCard from "./peliculas/MovieCard";

export default function Home() {
  const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(true);
    const [arrSorted, setArrSorted] = useState([]);
  
    useEffect(() => {
      async function fetchMovies() {
        try {
          const response = await fetch(`https://mflixbackend.azurewebsites.net/api/movies?pageSize=30&page=1`);
          const data = await response.json();
          setMovies(data);
          setLoading(false);
          console.log(data, "data")
          // sortMovies(data)
        } catch (error) {
          console.error('Error fetching movies:', error);
          setLoading(false);
        }
      }
  
      fetchMovies();
    }, []);

    const sortMovies = (movies) => {
      setArrSorted(movies.sort((a,b) => a.imdb.rating - b.imdb.rating).slice(0,10))
      console.log(setArrSorted, "array sorted")
      return setArrSorted
    }
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      height: '70vh',
      textAlign: 'center'
    }}>
      <h1 style={{
        fontSize: '2.5rem',
        fontWeight: 'bold',
        color: '#333',
        marginBottom: '1rem'
      }}>Simulación de Examen</h1>
      <p style={{ 
        fontSize: '1.25rem',
        color: '#666' 
      }}>Programación en Nuevas Tecnologías 2</p>

      <div style={{width: "100%"}}>
        {loading ? 
        <p>cargando las peliculas</p>
        :
        movies.sort((a,b) => a.imdb.rating - b.imdb.rating).slice(0,10).map((movie) => {
          return(<div key={movie._id} style={{width: "100%"}}>
          <MovieCard  movie={movie} />
          </div>)
        })
        }
      </div>

    </div>
  );
}
