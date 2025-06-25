import { Routes, Route, BrowserRouter } from "react-router-dom"

// layouts
import DefaultLayout from "./layouts/DefaultLayout"

// pages
import HomePage from "./pages/HomePage"
import VehicleDetails from "./pages/VehicleDetails"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route Component={DefaultLayout}>
          <Route path="/" Component={HomePage} />
          <Route path="/vehicles/:id" Component={VehicleDetails} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}