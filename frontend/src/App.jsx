import { Routes, Route, BrowserRouter } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import VehicleDetails from "./pages/VehicleDetails"

// contexts
import { GlobalProvider } from "./contexts/GlobalContext"

export default function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/vehicles/:id" Component={VehicleDetails} />
          </Route>
        </Routes>
      </GlobalProvider>
    </BrowserRouter>
  )
}