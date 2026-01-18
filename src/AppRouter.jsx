
import { Route, Navigate } from "react-router-dom"
import {RoutesWithNotFound} from './routes/RoutesWithNotFound'
import { Tienda } from "./components/tienda/Tienda"
import { Admin } from "./components/admin/Admin"
export const AppRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/tienda" />} />
            <Route path="/tienda/*" element={<Tienda />} />
            <Route path="/admin/*" element={<Admin />} />
        </RoutesWithNotFound>
    )
}
