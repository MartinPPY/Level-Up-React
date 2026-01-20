import { Navigate, Route, Routes } from "react-router-dom";
import { ProductoView } from "../components/tienda/productos/productoView";
import { CartView } from "../components/cart/cartView";

export const CarritoRoutes = ({ handlerAdd, handlerDelete, cartItems }) => {
    return (
        <Routes>
            <Route 
                path="products" 
                element={<ProductoView handler={handlerAdd} />} 
            />
            <Route 
                path="cart" 
                element={<CartView items={cartItems} handlerDelete={handlerDelete} />} 
            />
            
            {/* Redirecciones para no perderse */}
            <Route path="/" element={<Navigate to="products" />} />
        </Routes>
    );
};