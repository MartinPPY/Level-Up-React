
import { Route, Navigate } from "react-router-dom"
import { RoutesWithNotFound } from './routes/RoutesWithNotFound'
import { Tienda } from "./pages/tienda/Tienda"
import { Admin } from "./pages/admin/Admin"
import { AdminGuard } from "./guards/AdminGuard"
import { Forbidden } from "./components/forbidden/Forbidden"

export const AppRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/tienda" />} />
            <Route path="/tienda/*" element={<Tienda />} />
            <Route element={<AdminGuard />}>
                <Route path="/admin/*" element={<Admin />} />
            </Route>
            <Route path="/forbidden" element={<Forbidden />} />
        </RoutesWithNotFound>
    )
}
