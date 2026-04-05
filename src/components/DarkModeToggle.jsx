
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
	// Check system preference
	const getInitialTheme = () => {
		if (typeof window !== "undefined") {
			const saved = localStorage.getItem("theme");
			if (saved) return saved === "dark";
			return window.matchMedia("(prefers-color-scheme: dark)").matches;
		}
		return false;
	};

	const [dark, setDark] = useState(getInitialTheme);

	useEffect(() => {
		if (dark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [dark]);

	return (
		<button
			onClick={() => setDark((d) => !d)}
			className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded"
			aria-label="Toggle dark mode"
		>
			{dark ? "🌙 Dark" : "☀️ Light"}
		</button>
	);
}
