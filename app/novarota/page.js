import { MariaPrea, CartaoInformativo } from "./componentes";

// Export auxiliar solicitado no Exercício 2 da Receita 14
export function AvisoNovaRota({ texto }) {
  return (
    <p style={{ background: "#f3f4f6", padding: "8px" }}>
      <strong>Aviso de /novarota:</strong> {texto}
    </p>
  );
}

export default function NovaRotaHome() {
  return (
    <div>
      <h1>Nova Rota, Nova Página</h1>
      <MariaPrea />
      <MariaPrea mensagem="Maria Preá agora recebe texto por parâmetro!" />
      <CartaoInformativo
        titulo="Componente com props"
        descricao="As propriedades passadas na marca JSX chegam como objeto de parâmetros à função."
      />
    </div>
  );
}
