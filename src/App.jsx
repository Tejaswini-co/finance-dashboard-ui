


import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import SummaryCards from "./components/SummaryCards";
import BalanceChart from "./components/BalanceChart";
import SpendingChart from "./components/SpendingChart";
import TransactionsTable from "./components/TransactionsTable";
import InsightsPanel from "./components/InsightsPanel";

import { useState } from "react";

export default function App() {
	const [page, setPage] = useState("Dashboard");
	return (
		<div className="flex min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
			<Sidebar page={page} setPage={setPage} />
			<div className="flex-1 p-6">
				<Header />
				{page === "Dashboard" && (
					<>
						<SummaryCards />
						<div className="grid lg:grid-cols-2 gap-6 mb-6">
							<BalanceChart />
							<SpendingChart />
						</div>
						<div className="grid lg:grid-cols-3 gap-6">
							<div className="lg:col-span-2">
								<TransactionsTable />
							</div>
							<InsightsPanel />
						</div>
					</>
				)}
				{page === "Analytics" && (
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow transition-colors duration-300 text-gray-900 dark:text-gray-100">
						<h2 className="text-2xl font-bold mb-4">Analytics Overview</h2>
						<div className="mb-6">
							<div className="text-lg font-semibold mb-2">Top Spending Categories</div>
							<ul className="list-disc pl-6 text-gray-700 dark:text-gray-200">
								<li>Rent: $1,200</li>
								<li>Food: $400</li>
								<li>Shopping: $300</li>
							</ul>
						</div>
						<div className="mb-6">
							<div className="text-lg font-semibold mb-2">Monthly Comparison</div>
							<div className="flex gap-8">
								<div>
									<div className="text-xs text-gray-500 dark:text-gray-300">March</div>
									<div className="text-xl font-bold">$2,500</div>
								</div>
								<div>
									<div className="text-xs text-gray-500 dark:text-gray-300">April</div>
									<div className="text-xl font-bold">$2,800</div>
								</div>
							</div>
						</div>
						<div>
							<div className="text-lg font-semibold mb-2">Observation</div>
							<div className="text-gray-700 dark:text-gray-200">Your spending increased by 12% compared to last month.</div>
						</div>
					</div>
				)}
				{page === "Transactions" && (
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow transition-colors duration-300">
						<TransactionsTable />
					</div>
				)}
				{page === "Budget" && (
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow transition-colors duration-300">
						<h2 className="text-2xl font-bold mb-4">Budget Tracker</h2>
						<div className="mb-6">
							<div className="flex justify-between mb-2">
								<span className="text-gray-700 dark:text-gray-200">Total Budget</span>
								<span className="font-semibold">$2,000</span>
							</div>
							<div className="w-full bg-gray-200 rounded h-3 mb-2">
								<div className="bg-blue-500 h-3 rounded w-3/5"></div>
							</div>
							<div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
								<span>Used: $1,200</span>
								<span>Remaining: $800</span>
							</div>
						</div>
						<div>
							<div className="text-lg font-semibold mb-2">Goal: Vacation</div>
							<div className="w-full bg-gray-200 rounded h-3 mb-2">
								<div className="bg-green-500 h-3 rounded w-1/2"></div>
							</div>
							<div className="flex justify-between text-sm text-gray-500 dark:text-gray-300">
								<span>Saved: $1,000</span>
								<span>Target: $2,000</span>
							</div>
						</div>
					</div>
				)}
				{page === "Settings" && (
					<div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow max-w-lg transition-colors duration-300">
						<h2 className="text-2xl font-bold mb-4">Settings</h2>
						<div className="mb-6">
							<label className="block mb-2 font-semibold">Theme</label>
							<select className="w-full border rounded px-3 py-2">
								<option>Light</option>
								<option>Dark</option>
							</select>
						</div>
						<div className="mb-6">
							<label className="block mb-2 font-semibold">Notification Email</label>
							<input type="email" className="w-full border rounded px-3 py-2" placeholder="you@email.com" />
						</div>
						<button className="bg-blue-500 text-white px-4 py-2 rounded">Save Settings</button>
					</div>
				)}
			</div>
		</div>
	);
}
