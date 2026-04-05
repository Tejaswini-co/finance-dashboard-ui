
import DarkModeToggle from "./DarkModeToggle";

export default function Header(){
return(
<div className="flex justify-between items-center mb-6">
<h1 className="text-3xl font-bold">Finance Dashboard</h1>
<DarkModeToggle/>
</div>
)
}
