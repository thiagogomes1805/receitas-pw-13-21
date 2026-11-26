import { MariaPrea, CartaoInformativo } from "../componentes";
import { AvisoNovaRota } from "../page";

export default function SubRotaPage() {
  return (
    <div>
      <h1>Sub-rota dentro de /novarota</h1>
      <AvisoNovaRota texto="Este componente veio diretamente de app/novarota/page.js." />
      <MariaPrea mensagem="Mensagem personalizada na sub-rota!" />
      <CartaoInformativo
        titulo="Rota aninhada"
        descricao="Acessada através do endereço /novarota/subrota."
      />
    </div>
  );
}
