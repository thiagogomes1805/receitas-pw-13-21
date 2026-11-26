import React from 'react';
import Image from 'next/image';

export async function generateStaticParams() {
  const allMovies = await fetch('https://www.omdbapi.com/?apikey=58991ab6&s=lady')
    .then((res) => res.json());

  return (allMovies.Search || []).map((movie) => ({
    id: movie.imdbID,
  }));
}

export default async function Home({ params }) {
  const { id } = await params;
  const movie = await fetch(`https://www.omdbapi.com/?apikey=58991ab6&i=${id}`)
    .then((res) => res.json());

  return (
    <div>
      <h1>{movie.Title} ({movie.Year})</h1>
      {movie.Poster && movie.Poster !== "N/A" && (
        <Image
          src={movie.Poster}
          alt={`Poster de ${movie.Title}`}
          width={300}
          height={445}
        />
      )}
      <p>Director: {movie.Director}</p>
      <p>Plot: {movie.Plot}</p>
    </div>
  );
}
