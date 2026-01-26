import { Gamepad2, ShoppingCart } from "lucide-react"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { useCart } from "../../context/CartContext"
import { useAuth } from "../../context/AuthContext"


export const Header = () => {

    const { cart } = useCart()
    const { authenticated, setAuthenticated } = useAuth()
    const navigate = useNavigate()



    const menuOptions = [
        { name: "Inicio", path: "/tienda/home" },
        { name: "Noticias", path: "/tienda/blogs" },
        { name: "Productos", path: "/tienda/productos" },
        { name: "Nosotros", path: "/tienda/nosotros" },
        { name: "Contacto", path: "/tienda/contacto" }
    ]

    const logOut = () => {
        localStorage.removeItem("token")
        setAuthenticated(false)
        navigate("/tienda")
    }



    return (
        <header className="bg-dark border-bottom border-secondary sticky-top p-2">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <Link to="/tienda" className="navbar-brand fw-bold fs-4">
                    <Gamepad2 className="text-info"/> Level Up
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarMain">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarMain">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-lg-3">
                        {menuOptions.map((option) => (
                            <li className="tienda nav-item" key={option.path}>
                                <NavLink className={({ isActive }) => isActive ? "nav-link active" : "nav-link"} to={option.path}>
                                    {option.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>

                    <div className="d-flex gap-3 align-items-center">
                        {
                            authenticated ? (
                                <button className="tienda btn btn-sm btn-outline-danger" onClick={logOut}>Cerrar sesión</button>
                            ) : (
                                <>
                                    <Link to="/tienda/login" className="tienda btn btn-sm btn-outline-info">Iniciar sesión</Link>
                                    <Link to="/tienda/registro" className="tienda btn btn-sm btn-outline-success">Registrarse</Link>
                                </>
                            )
                        }
                        <Link className="position-relative text-white" to="/tienda/cart"
                            aria-controls="cart">
                            <ShoppingCart />
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                                {cart.reduce((total, item) => total + item.cantidad, 0)}
                            </span>
                        </Link>
                    </div>
                </div>
            </nav>
        </header >
    )
}
