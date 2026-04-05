
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from "recharts";
import { spendingData } from "../data/mockData";

const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EF4444"];

export default function SpendingChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="mb-4 font-semibold">Spending Distribution</h2>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie data={spendingData} dataKey="value" nameKey="name" outerRadius={80}>
            {spendingData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
