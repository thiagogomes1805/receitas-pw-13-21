"use client";

import Form from "next/form";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);

  async function handleAction(formData) {
    const titleSearchKey = formData.get("titleSearchKey");
    const httpRes = await fetch(
      `/api/searchMovies?titleSearchKey=${encodeURIComponent(titleSearchKey)}`
    );
    const jsonRes = await httpRes.json();
    setResultMovies(jsonRes.Search || []);
  }

  return (
    <div>
      <MovieForm actionHandler={handleAction} />
      <MovieTable movies={resultMovies} />
    </div>
  );
}

export function MovieForm({ actionHandler }) {
  return (
    <Form action={actionHandler}>
      <label htmlFor="idTitleSearchKey">Título</label>
      <input id="idTitleSearchKey" name="titleSearchKey" />
      <button type="submit">Pesquisar</button>
    </Form>
  );
}

export function MovieTable({ movies }) {
  return (
    <div>
      {movies.map((m) => (
        <div key={m.imdbID}>
          <Link href={`/movie/${m.imdbID}`}>
            {m.Title} --- {m.Year}
          </Link>
        </div>
      ))}
    </div>
  );
}
