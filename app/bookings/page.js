// export default function Page() {

//   const bookings = [
//     {
//       doctor: "Dr Ramesh",
//       navatar: "Navatar-01",
//       time: "10:00 - 10:30",
//       status: "Upcoming"
//     }
//   ];

//   return (
//     <div className="p-6">

//       <h1 className="text-xl font-semibold mb-4">
//         Booking Schedule
//       </h1>

//       <table className="w-full border">

//         <thead>
//           <tr className="bg-gray-100">
//             <th className="p-2 border">Doctor</th>
//             <th className="p-2 border">Navatar</th>
//             <th className="p-2 border">Time</th>
//             <th className="p-2 border">Status</th>
//           </tr>
//         </thead>

//         <tbody>

//           {bookings.map((b, i) => (
//             <tr key={i}>
//               <td className="p-2 border">{b.doctor}</td>
//               <td className="p-2 border">{b.navatar}</td>
//               <td className="p-2 border">{b.time}</td>
//               <td className="p-2 border">{b.status}</td>
//             </tr>
//           ))}

//         </tbody>

//       </table>

//     </div>
//   );
// }
export default function Page() {

  const bookings = [
    {
      doctor: "Dr Ramesh",
      navatar: "Navatar-01",
      time: "10:00 - 10:30",
      status: "Upcoming"
    }
  ];

  return (
    <div className="p-6">

      <h1 className="text-xl font-semibold mb-4">
        Booking Schedule
      </h1>

      <table className="w-full border">

        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Doctor</th>
            <th className="p-2 border">Navatar</th>
            <th className="p-2 border">Time</th>
            <th className="p-2 border">Status</th>
          </tr>
        </thead>

        <tbody>

          {bookings.map((b, i) => (
            <tr key={i}>
              <td className="p-2 border">{b.doctor}</td>
              <td className="p-2 border">{b.navatar}</td>
              <td className="p-2 border">{b.time}</td>
              <td className="p-2 border">{b.status}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}