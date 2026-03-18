import Card from "../components/Card";

export default function Dashboard() {
  return (
    <div style={{ padding: "20px" }}>

      <h1 style={{ marginBottom: "20px" }}>
        Dashboard
      </h1>

      <div style={{ display: "flex", gap: "20px" }}>

        <Card title="Doctors" value="20" />

        <Card title="Navatars" value="10" />

        <Card title="Active Sessions" value="2" />

      </div>

    </div>
  );
}