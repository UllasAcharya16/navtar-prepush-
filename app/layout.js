import "./globals.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export const metadata = {
  title: "Navatar Super Admin",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>

        <Navbar />

        <div style={{ display: "flex" }}>
          <Sidebar />

          <main style={{ flex: 1, padding: "20px" }}>
            {children}
          </main>
        </div>

      </body>
    </html>
  );
}