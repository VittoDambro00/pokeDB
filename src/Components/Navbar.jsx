import { Link } from "react-router-dom";
export default function Navbar() {
    return <nav className="bg-slate-950 text-slate-200 flex flex-row gap-4 h-[50px] text-xl text-center justify-center p-2">
        <Link to="/">Home</Link>
    </nav>
}