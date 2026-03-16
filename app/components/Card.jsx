export default function Card({ title, value }) {
  return (
    <div
      style={{
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        width: "180px"
      }}
    >
      <h3 style={{ color: "#555" }}>{title}</h3>

      <h2 style={{ fontSize: "28px", marginTop: "10px" }}>
        {value}
      </h2>
    </div>
  );
}