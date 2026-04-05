import React from "react";

export default function Sidebar({ page, setPage }) {
  const nav = ["Dashboard", "Analytics", "Transactions", "Budget", "Settings"];
  return (
    <div className="w-64 bg-gray-900 text-white min-h-screen p-5">
      <h2 className="text-xl font-bold mb-10">FinTrack</h2>
      <ul className="space-y-6">
        {nav.map((item) => (
          <li
            key={item}
            className={`cursor-pointer px-2 py-1 rounded transition ${page === item ? "bg-blue-500 text-white" : "hover:text-blue-400"}`}
            onClick={() => setPage(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
