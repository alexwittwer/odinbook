import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../App";

export default function Header() {
    const user = useContext(UserContext)
    return (
        <header>
            <nav className=" flex items-end justify-end gap-5 px-5 text-xl">
                <Link to={"/home"}>Home</Link>
                {user && <>
                    <Link to={``}>Profile</Link>
                    <Link to={"/settings"}>Settings</Link>
                </>}
                {!user && <>
                    <Link to={"/login"}>Login</Link>
                    <Link to={"/signup"}>Signup</Link>
                </>}
            </nav>
        </header>
    )
}