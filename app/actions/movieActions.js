'use server';

export async function searchMovies(formData) {
  const titleSearchKey = formData.get("titleSearchKey");
  const yearSearchKey = formData.get("yearSearchKey");

  if (!titleSearchKey || titleSearchKey.trim() === '') {
    return { Search: [] };
  }

  const yearParam = yearSearchKey ? `&y=${encodeURIComponent(yearSearchKey)}` : '';

  try {
    const httpRes = await fetch(
      `https://www.omdbapi.com/?apikey=58991ab6&s=${encodeURIComponent(titleSearchKey)}${yearParam}`
    );
    const jsonRes = await httpRes.json();
    return jsonRes;
  } catch (err) {
    return { error: `Erro na requisição: ${err}` };
  }
}
