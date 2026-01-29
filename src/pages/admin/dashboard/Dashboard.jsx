import { Gamepad2, ShoppingCart, User } from "lucide-react"
import { Ventas } from "./Ventas"
import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/user.service"
import { getAllProducts } from "../../../services/product.service"
import { getVentas } from "../../../services/venta.service"

export const Dashboard = ({ role }) => {

  const [userCount, setUserCount] = useState(0)
  const [productCount, setProductCount] = useState(0)
  const [saleCount, setSaleCount] = useState(0)

  useEffect(() => {

    const getResumen = async () => {
      try {

        const products = await getAllProducts()
        setProductCount(products.length)

        const sales = await getVentas()
        setSaleCount(sales.length)

        const users = await getAllUsers()
        setUserCount(users.length)

      } catch (error) {
        console.error(error)
      }
    }

    getResumen()

  }, [])



  const menus = [
    { visible: role === "ROLE_ADMIN", icon: <User size={35} />, title: "Usuarios", count: userCount, href: '/admin/users' },
    { visible: role === "ROLE_ADMIN" || role === "ROLE_VENDEDOR", icon: <Gamepad2 size={35} />, title: "Productos", count: productCount, href: '/admin/products' },
    { visible: role === "ROLE_ADMIN" || role === "ROLE_VENDEDOR", icon: <ShoppingCart size={35} />, title: "Ventas", count: saleCount, href: '/admin/sales' },
  ]

  return (
    <main className="container-fluid p-5">
      <h1>Dashboard</h1>
      <p>En esta sección podrás gestionar los productos, usuarios y ventas de la tienda.</p>
      <section className="row gap-4">

        {
          menus.map((menu, index) => menu.visible && (
            <div className="col-lg p-3" key={index}>

              <div className="card d-flex flex-column gap-3">
                <div className="card-body d-flex flex-column gap-3">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge text-bg-secondary rounded-circle p-2">
                      {menu.icon}
                    </span>
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
