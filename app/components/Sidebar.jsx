"use client";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-56 h-screen bg-white p-6 shadow-[4px_0_10px_-2px_rgba(0,0,0,0.08)]">

      <ul className="space-y-4 text-gray-700">

        <li>
          <Link
            href="/dashboard"
            className="block px-2 py-1 rounded-md hover:bg-gray-100 hover:text-blue-500 transition"
          >
            Dashboard
          </Link>
        </li>

        <li>
          <Link
            href="/doctors"
            className="block px-2 py-1 rounded-md hover:bg-gray-100 hover:text-blue-500 transition"
          >
            Doctors
          </Link>
        </li>

        <li>
          <Link
            href="/navatars"
            className="block px-2 py-1 rounded-md hover:bg-gray-100 hover:text-blue-500 transition"
          >
            Navtars
          </Link>
        </li>

        <li>
          <Link
            href="/bookings"
            className="block px-2 py-1 rounded-md hover:bg-gray-100 hover:text-blue-500 transition"
          >
            Bookings
          </Link>
        </li>

        <li>
          <Link
            href="/Monitor"
            className="block px-2 py-1 rounded-md hover:bg-gray-100 hover:text-blue-500 transition"
          >
            Monitor
          </Link>
        </li>

      </ul>
    </div>
  );
}