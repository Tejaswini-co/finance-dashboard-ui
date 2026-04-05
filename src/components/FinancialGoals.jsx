import { Target } from "lucide-react";

const goals = [
  { name: "Emergency Fund", target: 5000, current: 3200 },
  { name: "Vacation", target: 2000, current: 1200 },
  { name: "New Laptop", target: 1500, current: 900 },
];

export default function FinancialGoals() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4 flex items-center gap-2"><Target size={18}/> Financial Goals</h2>
      <ul className="space-y-6">
        {goals.map((g, i) => {
          const percent = Math.round((g.current / g.target) * 100);
          return (
            <li key={i}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{g.name}</span>
                <span className="text-xs text-gray-500">{percent}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded h-2">
                <div
                  className="bg-blue-500 h-2 rounded"
                  style={{ width: percent + "%" }}
                ></div>
              </div>
              <div className="text-xs text-gray-400 mt-1">
                ${g.current} / ${g.target}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
