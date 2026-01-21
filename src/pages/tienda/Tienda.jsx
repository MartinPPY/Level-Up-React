import { Navigate, Route, Routes } from "react-router-dom"
import { Home } from '../tienda/home/Home'
import { Registro } from '../tienda/registro/Registro'
import { Login } from '../tienda/login/Login'
import { Contacto } from '../tienda/contacto/Contacto'
import { ProductDetail } from '../tienda/product-detail/ProductDetail'
<<<<<<< HEAD
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import { Cart } from '../tienda/cart/Cart'
=======
import {Header} from '../../components/header/Header'
import {Footer} from '../../components/footer/Footer'
import { Nosotros } from "./nosotros/Nosotros"
import { Blogs } from "./blogs/Blogs"

>>>>>>> e3fe2eea909b1a465a50b8277c0808a7cdaf685b


export const Tienda = () => {
    return (
        <>
            <div className="d-flex flex-column min-vh-100 bg-dark   ">
                <main className="flex-grow-1">
                    <Header />
                    <Routes>
                        <Route index element={<Navigate to="home" />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/registro" element={<Registro />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/contacto" element={<Contacto />} />
                        <Route path="/producto-detalle/:codigo" element={<ProductDetail />} />
<<<<<<< HEAD

                        
=======
                        <Route path="/nosotros" element={<Nosotros />} />
                        <Route path="/blogs" element={<Blogs />} />
>>>>>>> e3fe2eea909b1a465a50b8277c0808a7cdaf685b
                    </Routes>
                    <Footer />
                </main>
            </div>
        </>
    )
}
