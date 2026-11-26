import Link from "next/link";

export default async function Home({ searchParams }) {
  const { titleSearchKey = "bagdad", yearSearchKey = "" } = await searchParams;

  const yearParam = yearSearchKey ? `&y=${encodeURIComponent(yearSearchKey)}` : "";
  const url = `https://www.omdbapi.com/?apikey=58991ab6&s=${encodeURIComponent(titleSearchKey)}${yearParam}`;

  const res = await fetch(url);
  const data = await res.json();

  return (
    <main className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">
        Resultados para: "{titleSearchKey}" {yearSearchKey && `(${yearSearchKey})`}
      </h1>

      {!data.Search ? (
        <p className="text-red-600">
          Nenhum filme encontrado. ({data.Error || "Tente outro termo"})
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.Search.map((m) => (
            <Link
              key={m.imdbID}
              href={`/movie/${m.imdbID}`}
              className="border rounded-lg p-4 shadow-sm flex flex-col gap-2 hover:shadow-md transition"
            >
              {m.Poster !== "N/A" && (
                <img
                  src={m.Poster}
                  alt={m.Title}
                  className="w-full h-64 object-cover rounded"
                />
              )}
              <h2 className="font-semibold text-lg">{m.Title}</h2>
              <p className="text-sm text-gray-600">
                {m.Year} · {m.Type}
              </p>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
