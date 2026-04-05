

import { useState } from "react";
import { transactions } from "../data/mockData";
import { exportToCSV } from "../utils/exportCSV";



export default function TransactionsTable() {
	const [search, setSearch] = useState("");
	const [category, setCategory] = useState("");
	const categories = Array.from(new Set(transactions.map(t => t.category)));
	const filtered = transactions.filter(t =>
		(t.description.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase())) &&
		(category ? t.category === category : true)
	);

	return (
		<div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-lg p-6 rounded-xl shadow-lg">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
				<h2 className="font-semibold">Transactions</h2>
				<div className="flex gap-2 flex-1 md:flex-none">
					<input
						type="text"
						placeholder="Search transactions..."
						value={search}
						onChange={e => setSearch(e.target.value)}
						className="border rounded px-2 py-1 w-full md:w-48 focus:outline-none focus:ring bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-400"
					/>
					<select
						value={category}
						onChange={e => setCategory(e.target.value)}
						className="border rounded px-2 py-1 w-full md:w-40 focus:outline-none focus:ring bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100"
					>
						<option value="">All Categories</option>
						{categories.map((cat, i) => (
							<option key={i} value={cat}>{cat}</option>
						))}
					</select>
				</div>
				<button
					onClick={() => exportToCSV(filtered)}
					className="bg-blue-500 text-white px-3 py-1 rounded shadow hover:bg-blue-600 transition"
				>
					Export CSV
				</button>
			</div>
				<div className="overflow-x-auto rounded-xl">
					<table className="w-full text-left rounded-xl overflow-hidden text-gray-900 dark:text-gray-100">
						<thead>
							<tr className="border-b bg-gray-50 dark:bg-gray-700">
								<th className="py-2 px-3">Date</th>
								<th className="py-2 px-3">Category</th>
								<th className="py-2 px-3">Description</th>
								<th className="py-2 px-3">Amount</th>
								<th className="py-2 px-3">Status</th>
							</tr>
						</thead>
						<tbody>
							{filtered.map((t, i) => (
								<tr
									key={i}
									className={`border-b transition hover:bg-gray-50 dark:hover:bg-gray-700 ${i % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-900'}`}
								>
									<td className="py-2 px-3">{t.date}</td>
									<td className="py-2 px-3">{t.category}</td>
									<td className="py-2 px-3">{t.description}</td>
									<td className={`py-2 px-3 font-semibold ${t.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>{t.amount}</td>
									<td className="py-2 px-3">{t.status}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
		</div>
	);
}
