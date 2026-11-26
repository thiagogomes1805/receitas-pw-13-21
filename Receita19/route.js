export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const titleSearchKey = searchParams.get("titleSearchKey");

  if (!titleSearchKey) {
    return Response.json({ Search: [] });
  }

  const httpRes = await fetch(
    `https://www.omdbapi.com/?apikey=58991ab6&s=${encodeURIComponent(titleSearchKey)}`
  );
  const jsonRes = await httpRes.json();
  return Response.json({ ...jsonRes });
}
