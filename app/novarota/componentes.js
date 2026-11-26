export function MariaPrea({ mensagem = "Morreu Maria Preá..." }) {
  return <h2>{mensagem}</h2>;
}

export function CartaoInformativo({ titulo, descricao }) {
  return (
    <section style={{ border: "1px solid #ccc", padding: "12px", marginTop: "12px" }}>
      <h3>{titulo}</h3>
      <p>{descricao}</p>
    </section>
  );
}
