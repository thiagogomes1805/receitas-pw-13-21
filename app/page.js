import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Viva Santana!</h1>
      <p>
        <Link href="/novarota">Ir para Nova Rota (com Next Link)</Link>
      </p>
      <p>
        <a href="/novarota">Ir para Nova Rota (jeito antigo com tag a)</a>
      </p>
    </div>
  );
}

// Exports auxiliares solicitados no Exercício 2 da Receita 13
export function CabecalhoComum() {
  return (
    <header>
      <strong>Aplicação Next.js · Receita 13</strong>
    </header>
  );
}

export function RodapeComum() {
  return (
    <footer>
      <small>Desenvolvido com App Router</small>
    </footer>
  );
}
