export default function Page() {

  const live = [
    {
      doctor: "Dr Sudha",
      navatar: "Navatar-02",
      status: "Live"
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-xl font-semibold mb-4">
        Live Usage
      </h1>

      <div className="space-y-4">

        {live.map((l, i) => (
          <div key={i} className="bg-white p-4 shadow rounded">

            <p><b>Doctor:</b> {l.doctor}</p>
            <p><b>Navatar:</b> {l.navatar}</p>
            <p className="text-green-600 font-bold">
              ● LIVE
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}