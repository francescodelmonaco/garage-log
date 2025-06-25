import { NavLink } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
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