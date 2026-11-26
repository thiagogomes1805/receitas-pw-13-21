import Form from "next/form";

export default function MoviesLayout({ children }) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <Form action="/movies" className="flex flex-wrap gap-3 items-end mb-8 border-b pb-6">
        <div className="flex flex-col flex-1 min-w-[200px]">
          <label htmlFor="idTitleSearchKey" className="text-sm font-medium mb-1">
            Título
          </label>
          <input
            id="idTitleSearchKey"
            name="titleSearchKey"
            placeholder="Digite o nome do filme..."
            required
            className="border rounded px-3 py-2"
          />
        </div>

        <div className="flex flex-col w-32">
          <label htmlFor="idYearSearchKey" className="text-sm font-medium mb-1">
            Ano
          </label>
          <input
            id="idYearSearchKey"
            name="yearSearchKey"
            type="number"
            placeholder="Ex: 1999"
            className="border rounded px-3 py-2"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 cursor-pointer"
        >
          Pesquisar
        </button>
      </Form>

      {/* Apenas esta parte atualiza a cada busca */}
      {children}
    </div>
  );
}
