
import { Route, Navigate } from "react-router-dom"
import { Tienda } from "./tienda/Tienda"
import {RoutesWithNotFound} from './routes/RoutesWithNotFound'
import { Admin } from "./admin/Admin"
export const AppRouter = () => {
    return (
        <RoutesWithNotFound>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Tienda />} />
            <Route path="/admin" element={<Admin />} />
        </RoutesWithNotFound>
    )
}
