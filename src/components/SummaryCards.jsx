

import { motion } from "framer-motion";
import { cardIcons } from "./cardIcons.jsx";

export default function SummaryCards() {
  const cards = [
    { title: "Balance", value: "$6,200" },
    { title: "Income", value: "$2,500" },
    { title: "Expenses", value: "$800" },
    { title: "Savings", value: "$1,700" },
  ];
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {cards.map((c, i) => (
        <div key={i} className="bg-blue-500 text-white p-6 rounded-xl shadow-lg">
          <p className="text-sm opacity-80">{c.title}</p>
          <h2 className="text-3xl font-bold">{c.value}</h2>
        </div>
      ))}
    </div>
  );
}
