import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./dashboard/Dashboard"
import { Header } from "./Header"
import { Footer } from "../../components/footer/Footer"
import { Users } from "./users/Users"
import { Products } from "./products/Products"
import { Ventas } from "./dashboard/Ventas"
import { NotFound } from "../../components/not-found/NotFound"

export const Admin = () => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header />
                <main className="flex-grow-1">
                    <Routes>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard />} />
                        <Route path="users" element={<Users />} />
                        <Route path="products" element={<Products />} />
                        <Route path="sales" element={<Ventas />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    )
}
