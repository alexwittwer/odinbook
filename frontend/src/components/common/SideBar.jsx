import { useContext } from "react"
import { UserContext } from "../App"

export default function SideBar() {
    const user = useContext(UserContext);
    
    return (
        <main className="bg-slate-50 min-w-80">
            <p className="text-black text-4xl">Sidebar</p>
        </main>
    )
}