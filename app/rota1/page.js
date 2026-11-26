import { CabecalhoComum, RodapeComum } from "../page";

export default function Rota1() {
  return (
    <div>
      <CabecalhoComum />
      <main>
        <h1>Esta é a Rota 1</h1>
        <p>Conteúdo servido a partir de app/rota1/page.js.</p>
      </main>
      <RodapeComum />
    </div>
  );
}
