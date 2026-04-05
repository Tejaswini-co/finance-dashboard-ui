
export default function InsightsPanel() {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h2 className="font-semibold mb-4">Insights</h2>
      <p className="mb-6">You saved 20% more this month.</p>
      <div className="mb-4">
        <p className="text-sm mb-1">Monthly Budget</p>
        <div className="w-full bg-gray-200 rounded h-2">
          <div className="bg-blue-500 h-2 rounded w-3/4"></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm mb-1">Savings Rate</p>
        <div className="w-full bg-gray-200 rounded h-2">
          <div className="bg-green-500 h-2 rounded w-2/3"></div>
        </div>
      </div>
      <div className="mb-4">
        <p className="text-sm mb-1">Investment Growth</p>
        <div className="w-full bg-gray-200 rounded h-2">
          <div className="bg-purple-500 h-2 rounded w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
