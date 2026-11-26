import Form from "next/form";

export default function MovieForm() {
  return (
    <Form action="/movies" className="p-6 max-w-md mx-auto flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="idTitleSearchKey" className="font-medium">
          Título
        </label>
        <input
          id="idTitleSearchKey"
          name="titleSearchKey"
          placeholder="Ex: Matrix"
          required
          className="border rounded px-3 py-2"
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="idYearSearchKey" className="font-medium">
          Ano (opcional)
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
        className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 cursor-pointer"
      >
        Pesquisar
      </button>
    </Form>
  );
}
