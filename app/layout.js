import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Aplicação Next.js",
  description: "Receitas 13 a 21 de Programação Web com Next.js",
};

export default function RootLayout({ children }) {
  console.log("montando layout raiz");

  return (
    <html lang="pt-BR">
      <body style={{ fontFamily: "sans-serif", margin: 0 }}>
        <div
          style={{
            background: "#10232e",
            color: "#ffffff",
            padding: "12px 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "center",
          }}
        >
          <strong>Menu principal</strong>
          <nav style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
            <Link href="/" style={{ color: "#edbb58" }}>Início</Link>
            <Link href="/rota1" style={{ color: "#edbb58" }}>Rota 1</Link>
            <Link href="/rota2" style={{ color: "#edbb58" }}>Rota 2</Link>
            <Link href="/novarota" style={{ color: "#edbb58" }}>Nova Rota</Link>
            <Link href="/novarota/subrota" style={{ color: "#edbb58" }}>Sub-rota</Link>
            <Link href="/movies" style={{ color: "#edbb58" }}>Movies (SSR)</Link>
            <Link href="/movieSearch" style={{ color: "#edbb58" }}>Movie Search</Link>
            <Link href="/clientMovies1" style={{ color: "#edbb58" }}>Client Movies 1</Link>
            <Link href="/clientApiMovies" style={{ color: "#edbb58" }}>Client API Movies</Link>
            <Link href="/clientServerMovies" style={{ color: "#edbb58" }}>Server Actions Movies</Link>
          </nav>
        </div>

        <main style={{ padding: "20px" }}>{children}</main>
      </body>
    </html>
  );
}
