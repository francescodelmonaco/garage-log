import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"

export default function DefaultLayout() {
    return (
        <>
            <header>
                <NavBar />
            </header>

            <main className="max-w-4/5 mx-auto">
                <Outlet />
            </main>
        </>
    )
}