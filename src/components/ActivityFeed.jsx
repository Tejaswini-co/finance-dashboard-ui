import { Clock } from "lucide-react";

const activities = [
  { time: "10:30 AM", text: "Salary credited to your account." },
  { time: "09:15 AM", text: "Paid electricity bill." },
  { time: "Yesterday", text: "Grocery shopping at Walmart." },
  { time: "Yesterday", text: "Transferred $200 to Savings." },
];

export default function ActivityFeed() {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow mb-6">
      <h2 className="font-semibold mb-4 flex items-center gap-2"><Clock size={18}/> Activity Feed</h2>
      <ul className="space-y-4">
        {activities.map((a, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="text-xs text-gray-400 w-20 shrink-0">{a.time}</span>
            <span className="text-sm text-gray-700 dark:text-gray-200">{a.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
