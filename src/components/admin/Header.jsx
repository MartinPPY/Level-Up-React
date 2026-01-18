import { Link, NavLink } from "react-router-dom"

export const Header = () => {

    const menus = [
        { name: 'Dashboard', href: '/admin/dashboard' },
        { name: 'Usuarios', href: '/admin/users' },
        { name: 'Productos', href: '/admin/products' },
        { name: 'Ventas', href: '/admin/sales' }
    ]

    return (
        <header className="sticky-top">
            <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/admin">Administración</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            {menus.map((menu) => (
                                <NavLink className={({ isActive }) =>
                                    isActive ? 'nav-link active' : 'nav-link'
                                }
                                    to={menu.href} key={menu.href} >
                                    {menu.name}
                                </NavLink>
                            ))}
                            <Link className="nav-link" to="/tienda/home">Volver a la tienda</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}
