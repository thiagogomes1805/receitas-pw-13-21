export default function Rota1Layout({ children }) {
  console.log("montando layout de /rota1");

  return (
    <div style={{ background: "#f9fafb", borderLeft: "4px solid #edbb58", padding: "16px" }}>
      <p style={{ marginTop: 0, fontSize: "0.9rem", color: "#555" }}>
        Layout específico do diretório /rota1
      </p>
      {children}
    </div>
  );
}
