import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./dashboard/Dashboard"
import { Header } from "./Header"
import { Footer } from "../footer/Footer"
import { Users } from "./users/Users"

export const Admin = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route index element={<Navigate to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<Users />} />
            </Routes>
            <Footer />
        </>
    )
}
