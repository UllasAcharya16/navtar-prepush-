"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-56 h-screen bg-white border-r p-6">

      <h2 className="text-lg font-bold mb-8">
        Navatar Admin
      </h2>

      <ul className="space-y-4 text-gray-700">

        <li>
          <Link href="/dashboard" className="hover:text-blue-500">
            Dashboard
          </Link>
        </li>

        <li>
          <Link href="/hospitals" className="hover:text-blue-500">
            Hospitals
          </Link>
        </li>

        <li>
          <Link href="/doctors" className="hover:text-blue-500">
            Doctors
          </Link>
        </li>

        <li>
          <Link href="/navatars" className="hover:text-blue-500">
            Navatars
          </Link>
        </li>

        <li>
          <Link href="/bookings" className="hover:text-blue-500">
            Bookings
          </Link>
        </li>

      </ul>
    </div>
  );
}