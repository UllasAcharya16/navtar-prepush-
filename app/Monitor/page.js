"use client";

import Image from "next/image";

export default function Page() {

  // LIVE DATA
  const sessions = [
    {
      doctor: "Dr Sudha",
      photo: "https://i.pravatar.cc/100?img=5",
      navatar: "Navatar-02",
      start: "10:00 AM",
      end: "10:30 AM",
      status: "Live",
      state: "In Use"
    },
    {
      doctor: "Dr Ramesh",
      photo: "https://i.pravatar.cc/100?img=8",
      navatar: "Navatar-01",
      start: "11:00 AM",
      end: "11:30 AM",
      status: "Upcoming",
      state: "-"
    }
  ];

  // HISTORY DATA (same structure)
  const history = [
    {
      doctor: "Dr Malini",
      photo: "https://i.pravatar.cc/100?img=16",
      navatar: "Navatar-02",
      start: "09:00 AM",
      end: "09:30 AM",
      status: "Ended",
      state: "Completed"
    },
    {
      doctor: "Dr Mohan",
      photo: "https://i.pravatar.cc/100?img=17",
      navatar: "Navatar-01",
      start: "08:00 AM",
      end: "08:20 AM",
      status: "Ended",
      state: "Early Exit"
    }
  ];

  const getStatusStyle = (status) => {
    if (status === "Live") return "bg-red-100 text-red-600";
    if (status === "Upcoming") return "bg-yellow-100 text-yellow-600";
    return "bg-gray-100 text-gray-600";
  };

  const getStateStyle = (state) => {
    if (state === "Early Exit") return "text-red-600";
    if (state === "Completed") return "text-green-600";
    return "text-gray-600";
  };

  const Card = ({ s }) => (
    <div className="bg-white rounded-xl shadow p-5 flex gap-4 items-center">

      <Image
        src={s.photo}
        alt="doctor"
        width={60}
        height={60}
        className="rounded-full"
      />

      <div className="flex-1">
        <h2 className="font-semibold text-lg">{s.doctor}</h2>

        <p className="text-sm text-gray-500">{s.navatar}</p>

        <p className="text-sm mt-1">
          {s.start} - {s.end}
        </p>

        <span
          className={`inline-block mt-2 px-3 py-1 text-xs rounded-full ${getStatusStyle(s.status)}`}
        >
          {s.status}
        </span>

        <p className={`text-sm mt-2 font-medium ${getStateStyle(s.state)}`}>
          ● {s.state}
        </p>
      </div>

    </div>
  );

  return (
    <div className="p-6 space-y-10">

      <h1 className="text-2xl font-semibold">
        Monitoring
      </h1>

      {/* LIVE */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Live Sessions
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {sessions.map((s, i) => (
            <Card key={i} s={s} />
          ))}
        </div>
      </div>

      {/* HISTORY */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          History
        </h2>

        <div className="grid md:grid-cols-2 gap-5">
          {history.map((s, i) => (
            <Card key={i} s={s} />
          ))}
        </div>
      </div>

    </div>
  );
}