"use client";

export default function Page() {

  // generate 10 navatars
  const navatars = Array.from({ length: 10 }, (_, i) => {
    const isOccupied = Math.random() > 0.5;

    return {
      id: `Navatar-${String(i + 1).padStart(2, "0")}`,
      status: isOccupied ? "Occupied" : "Free",
    };
  });

  const getStatusStyle = (status) => {
    if (status === "Occupied") return "bg-red-100 text-red-600";
    return "bg-green-100 text-green-600";
  };

  return (
    <div className="p-6">

      {/* Header */}
      <h1 className="text-2xl font-semibold mb-6">
        Navatars
      </h1>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">

        {navatars.map((n, i) => (
          <div
            key={i}
            className="bg-white p-5 rounded-xl shadow flex flex-col gap-3"
          >

            {/* Navatar ID */}
            <h2 className="text-lg font-semibold">
              {n.id}
            </h2>

            {/* Status */}
            <span
              className={`w-fit px-3 py-1 text-xs rounded-full ${getStatusStyle(n.status)}`}
            >
              {n.status}
            </span>

          </div>
        ))}

      </div>

    </div>
  );
}