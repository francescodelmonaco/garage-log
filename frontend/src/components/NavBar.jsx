import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="flex justify-between px-8 py-4">
            <figure>
                🚗
            </figure>

            <ul>
                <li>
                    <NavLink to={"/"}>Il mio garage</NavLink>
                </li>
            </ul>
        </nav>
    )
}