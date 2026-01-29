import { Navigate, Route, Routes } from "react-router-dom"
import { Dashboard } from "./dashboard/Dashboard"
import { Header } from "./Header"
import { Footer } from "../../components/footer/Footer"
import { Users } from "./users/Users"
import { Products } from "./products/Products"
import { Ventas } from "./dashboard/Ventas"
import { NotFound } from "../../components/not-found/NotFound"
import { useEffect, useState } from "react"
import { isAdmin } from "../../services/auth.service"

export const Admin = () => {

    const [role,setRole] = useState(null)

    useEffect(()=>{
        const getRole = async()=>{
            const response =await isAdmin()
            console.log(response[0].authority)
            setRole(response[0].authority)
        }
        getRole()
    },[])

    return (
        <>
            <div className="d-flex flex-column min-vh-100">
                <Header role={role} />
                <main className="flex-grow-1">
                    <Routes>
                        <Route index element={<Navigate to="dashboard" />} />
                        <Route path="dashboard" element={<Dashboard role={role} />} />
                        <Route path="users" element={<Users />} />
                        <Route path="products" element={<Products role={role} />} />
                        <Route path="sales" element={<Ventas />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    )
}
