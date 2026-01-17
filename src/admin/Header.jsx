import { Link, NavLink } from "react-router-dom"

export const Header = () => {

    const menus = [
        { name: 'Dashboard', href: '#dashboard' },
        { name: 'Usuarios', href: '#users' },
        { name: 'Productos', href: '#products' },
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
                                <a className="nav-link" href={menu.href} key={menu.href}>
                                    {menu.name}
                                </a>
                            ))}
                            <Link className="nav-link" to="/home">Volver a la tienda</Link>
                        </div>
                    </div>
                </div>
            </nav>

        </header>
    )
}
