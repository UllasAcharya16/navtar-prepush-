"use client";

import { useState } from "react";

export default function Page() {

  const [doctors, setDoctors] = useState([]);

  const [form, setForm] = useState({
    name: "",
    email: "",
    department: "",
    status: "Active",
    photo: null,
    photoPreview: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handlePhoto = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    const preview = URL.createObjectURL(file);

    setForm({
      ...form,
      photo: file,
      photoPreview: preview
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newDoctor = {
      name: form.name,
      email: form.email,
      department: form.department,
      status: form.status,
      photo: form.photoPreview
    };

    setDoctors([...doctors, newDoctor]);

    setForm({
      name: "",
      email: "",
      department: "",
      status: "Active",
      photo: null,
      photoPreview: ""
    });
  };

  return (
    <div className="p-6">

      <h1 className="text-2xl font-semibold mb-6">
        Doctors Management
      </h1>

      {/* Add Doctor Form */}

      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h2 className="text-lg font-semibold mb-4">
          Add Doctor
        </h2>

        <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />

          <input
            name="department"
            placeholder="Department / Specialization"
            value={form.department}
            onChange={handleChange}
            className="border p-2 rounded"
          />

          {/* File Upload */}

          <input
            type="file"
            accept="image/*"
            onChange={handlePhoto}
            className="border p-2 rounded"
          />

          {/* Status will later come from backend */}

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="border p-2 rounded"
          >
            <option value="Active">Active</option>
            <option value="Disabled">Disabled</option>
          </select>

          <button
            type="submit"
            className="bg-blue-600 text-white p-2 rounded"
          >
            Add Doctor
          </button>

        </form>

      </div>

      {/* Doctor Table */}

      <div className="bg-white p-6 rounded-xl shadow">

        <h2 className="text-lg font-semibold mb-4">
          Doctors List
        </h2>

        <table className="w-full border">

          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border">Photo</th>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>

          <tbody>

            {doctors.map((doc, i) => (
              <tr key={i}>

                <td className="p-2 border">
                  {doc.photo ? (
                    <img
                      src={doc.photo}
                      className="w-10 h-10 rounded-full"
                      alt="doctor"
                    />
                  ) : "-"}
                </td>

                <td className="p-2 border">{doc.name}</td>
                <td className="p-2 border">{doc.email}</td>
                <td className="p-2 border">{doc.department}</td>

                <td className="p-2 border">

                  {doc.status === "Active" ? (
                    <span className="text-green-600 font-medium">
                      Active
                    </span>
                  ) : (
                    <span className="text-red-600 font-medium">
                      Disabled
                    </span>
                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}