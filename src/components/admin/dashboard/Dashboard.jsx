import { Gamepad2, ShoppingCart, User } from "lucide-react"
import { Ventas } from "./Ventas"
import { Link } from "react-router-dom"

export const Dashboard = () => {

  const menus = [
    { icon: <User size={35} />, title: "Usuarios", count: 10, resumen: "+10 Usuarios", href: '/admin/users' },
    { icon: <Gamepad2 size={35} />, title: "Productos", count: 10, resumen: "+10 Productos", href: '/admin/products' },
    { icon: <ShoppingCart size={35} />, title: "Ventas", count: 10, resumen: "+10 Ventas", href: '/admin/sales' },
  ]

  return (
    <main className="container-fluid p-5">
      <h1>Dashboard</h1>
      <p>En esta sección podrás gestionar los productos, usuarios y ventas de la tienda.</p>
      <section className="row gap-3">

        {
          menus.map((menu, index) => (
            <div className="col-lg p-3" key={index}>

              <div className="card d-flex flex-column gap-3">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge text-bg-secondary rounded-circle p-2">
                      {menu.icon}
                    </span>
                    <h6><span className="badge text-bg-success">{menu.resumen}</span></h6>
                  </div>
                  <div>
                    <h3 className="card-text">{menu.count}</h3>
                    <p className="card-text">{menu.title}</p>
                  </div>
                  <Link to={menu.href} className="btn btn-dark">Ver {menu.title}</Link>
                </div>
              </div>

            </div>
          ))
        }
      </section>
      <Ventas />
    </main>
  )
}
