import Link from "next/link";

export default function NovaRotaLayout({ children }) {
  console.log("montando layout de /novarota");

  return (
    <section style={{ border: "2px solid #10232e", borderRadius: "8px", padding: "16px" }}>
      <div style={{ marginBottom: "12px", paddingBottom: "8px", borderBottom: "1px solid #ddd" }}>
        <strong>Seção Nova Rota</strong>{" · "}
        <Link href="/novarota">Principal</Link>{" | "}
        <Link href="/novarota/subrota">Sub-rota</Link>
      </div>
      {children}
    </section>
  );
}
