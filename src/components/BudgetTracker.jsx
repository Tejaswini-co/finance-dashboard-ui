import { PieChart, Pie, Cell } from "recharts";

const data = [
  { name: "Used", value: 1200 },
  { name: "Remaining", value: 800 },
];
const COLORS = ["#6366F1", "#E5E7EB"];

export default function BudgetTracker() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4">Budget Tracker</h2>
      <div className="flex items-center gap-6">
        <PieChart width={80} height={80}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={28}
            outerRadius={38}
            startAngle={90}
            endAngle={-270}
          >
            {data.map((entry, i) => (
              <Cell key={i} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <div>
          <div className="text-2xl font-bold text-blue-600">$1200</div>
          <div className="text-xs text-gray-500">of $2000 used</div>
        </div>
      </div>
    </div>
  );
}
