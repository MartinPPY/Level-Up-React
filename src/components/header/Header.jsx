import { ShoppingCart } from "lucide-react"
import { Link, NavLink } from "react-router-dom"

export const Header = () => {

    const menuOptions = [
        { name: "Inicio", path: "/tienda/home" },
        { name: "Noticias", path: "/tienda/blogs" },
        { name: "Productos", path: "/tienda/products" },
        { name: "Nosotros", path: "/tienda/nosotros" },
        { name: "Contacto", path: "/tienda/contacto" }
    ]



    return (
        <header className="bg-dark border-bottom border-secondary sticky-top p-2">
            <nav className="navbar navbar-expand-lg navbar-dark container">
                <Link to="/tienda" className="navbar-brand fw-bold fs-4">
                    🎮 Level Up
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

                    <div className="d-flex gap-3 align-items-center" id="auth-options">
                        <Link to="/login" className="tienda btn btn-sm btn-outline-info">Iniciar sesión</Link>
                        <Link to="/registro" className="tienda btn btn-sm btn-outline-success">Registrarse</Link>
                        <button className="position-relative text-white btn" role="button" data-bs-toggle="offcanvas" id="cart-resumen"

                            aria-controls="cart" onClick={() => { }}>
                            <ShoppingCart />
                        </button>
                    </div>
                </div>
            </nav>
        </header>
    )
}
