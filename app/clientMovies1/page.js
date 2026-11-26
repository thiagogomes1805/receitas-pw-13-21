"use client";

import Form from "next/form";
import Link from "next/link";
import { useState, useCallback, memo } from "react";
import { useFormStatus } from "react-dom";

export default function Home() {
  const [resultMovies, setResultMovies] = useState([]);
  const [errorMsg, setErrorMsg] = useState("");

  // useCallback mantém a mesma referência da função entre renderizações de Home
  const handleAction = useCallback(async (formData) => {
    const titleSearchKey = formData.get("titleSearchKey")?.trim();
    if (!titleSearchKey) return;

    setErrorMsg("");

    try {
      const httpRes = await fetch(
        `https://www.omdbapi.com/?apikey=58991ab6&s=${encodeURIComponent(titleSearchKey)}`
      );
      const jsonRes = await httpRes.json();

      if (jsonRes.Search) {
        setResultMovies(jsonRes.Search);
      } else {
        setResultMovies([]);
        setErrorMsg(jsonRes.Error || "Nenhum filme encontrado.");
      }
    } catch {
      setResultMovies([]);
      setErrorMsg("Erro ao consultar a API.");
    }
  }, []);

  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto flex flex-col gap-6">
        <h1 className="text-3xl font-bold text-gray-800">Busca de Filmes</h1>

        <MovieForm handleAction={handleAction} />

        {errorMsg && (
          <p className="text-red-600 bg-red-50 border border-red-200 p-3 rounded">
            {errorMsg}
          </p>
        )}

        <MovieTable movies={resultMovies} />
      </div>
    </main>
  );
}

// Botão isolado para consumir useFormStatus sem causar re-render em MovieForm
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-blue-600 text-white font-medium px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition cursor-pointer"
    >
      {pending ? "Pesquisando..." : "Pesquisar"}
    </button>
  );
}

// memo impede que MovieForm re-renderize quando Home atualizar resultMovies
export const MovieForm = memo(function MovieForm({ handleAction }) {
  const [title, setTitle] = useState("");

  console.log("Renderizou MovieForm");

  return (
    <Form
      action={handleAction}
      className="bg-white p-4 rounded-xl shadow-sm border flex flex-wrap gap-3 items-end"
    >
      <div className="flex flex-col flex-1 min-w-[220px]">
        <label htmlFor="idTitleSearchKey" className="text-sm font-medium text-gray-700 mb-1">
          Título do filme
        </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Digite o título e pressione Enter..."
          required
          className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <SubmitButton />
    </Form>
  );
});

export function MovieTable({ movies }) {
  if (!movies || movies.length === 0) return null;

  return (
    <div className="overflow-x-auto bg-white rounded-xl shadow-sm border">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-100 border-b text-gray-700 text-sm">
            <th className="p-3">Pôster</th>
            <th className="p-3">Título</th>
            <th className="p-3">Ano</th>
            <th className="p-3">Tipo</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((m) => (
            <tr key={m.imdbID} className="border-b last:border-b-0 hover:bg-gray-50">
              <td className="p-3 w-20">
                {m.Poster !== "N/A" ? (
                  <img
                    src={m.Poster}
                    alt={m.Title}
                    className="w-12 h-16 object-cover rounded"
                  />
                ) : (
                  <div className="w-12 h-16 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-500">
                    N/A
                  </div>
                )}
              </td>
              <td className="p-3 font-medium text-gray-900">
                <Link href={`/movie/${m.imdbID}`} className="text-blue-700 hover:underline">
                  {m.Title}
                </Link>
              </td>
              <td className="p-3 text-gray-600">{m.Year}</td>
              <td className="p-3 capitalize text-gray-600">{m.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
