import { CircleUser, LayoutDashboard,User } from "lucide-react";
import Link from "next/link";


export default function Navbar() {
  return (
    <div
      style={{
        height: "60px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 10px -2px rgba(0,0,0,0.08)",
        
      }}
    >
      {/* LEFT SIDE */}
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
       <User className="text-blue-600 w-5 h-5" />
        <span style={{ fontWeight: 600, fontSize: "18px", color: "#2563eb" }}>
          Navatar Admin
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <CircleUser />
        <span>Admin</span>
      </div>
    </div>
  );
}