import { CircleUser } from "lucide-react";

export default function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        borderBottom: "1px solid #ddd",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
      }}
    >
      <h2>Navatar Admin</h2>

      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <CircleUser />
        <span>Admin</span>
      </div>
    </div>
  );
}