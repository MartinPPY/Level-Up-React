import { useEffect, useState } from "react"
import { isAdmin } from "../services/auth.service"
import { Navigate, Outlet } from "react-router-dom"

export const AdminGuard = () => {
  const [admin, setAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getIsAdmin = async () => {
      try {
        const response = await isAdmin()  
        setAdmin(response[0]?.authority === "ROLE_ADMIN" || response[0]?.authority === "ROLE_VENDEDOR")
      } catch (error) {
        setAdmin(false)
      } finally {
        setLoading(false)
      }
    }

    getIsAdmin()
  }, [])

  // ⏳ Mientras carga, no renderiza nada (o un spinner)
  if (loading) return null

  return admin ? <Outlet /> : <Navigate to="/forbidden" replace />
}
