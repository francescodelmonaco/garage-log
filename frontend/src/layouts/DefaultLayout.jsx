import { Outlet } from "react-router-dom"

export default function DefaultLayout() {
    return (
        <>
            <header>
                <nav>
                    <figure>
                        Logo
                    </figure>
                </nav>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                Footer
            </footer>
        </>
    )
}