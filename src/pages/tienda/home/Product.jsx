import { Eye, ShoppingCart } from "lucide-react"
import { useCart } from "../../../context/CartContext"
import { Link, useNavigate } from "react-router-dom"
import { useToast } from "../../../context/ToastContext"
import { useAuth } from "../../../context/AuthContext"
import { getProductByCode } from "../../../services/product.service"


export const Product = ({ productos }) => {

    const { setCart, cart } = useCart()
    const { showToast } = useToast()
    const { authenticated } = useAuth()
    const navigate = useNavigate()

    const addToCart = async (codigo) => {

        if (!authenticated) {
            navigate("/tienda/login")
            return
        }

        try {
            const producto = await getProductByCode(codigo)

            if (producto.stock === 0) {
                showToast('Producto agotado', 'info')
                return
            }

            for (let item of cart) {
                if (producto.code === item.code) {
                    if (item.stock === 0) {
                        showToast('Producto agotado', 'info')
                        return
                    }
                    item.cantidad++
                    item.stock -= 1
                    setCart([...cart])
                    showToast(`Producto ${producto.name} añadido al carrito`, 'info')
                    return
                }

            }

            producto.cantidad = 1
            producto.stock -= 1

            setCart([...cart, producto])

            showToast(`Producto ${producto.name} añadido al carrito`, 'info')

        } catch (error) {
            console.error(error)
        }
    }

    return (
        <section className="container py-5">
            <div className="text-center mb-5 text-white">
                <h2 className="fw-bold">Productos destacados</h2>
                <p>Una selección de nuestros productos más populares</p>
            </div>

            <div className="scroll">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        productos.map((p, index) => (
                            <div className="col" key={index}>
                                <div className="card bg-black text-white h-100 border-secondary tienda-cart">
                                    <img src={p.image} alt={p.name} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.name}</h5>
                                        <p className="card-text">{p.category.name}</p>
                                    </div>
                                    <div className="card-footer d-flex flex-column gap-2 border-secondary">
                                        <div>
                                            <span className="fw-bold text-info">
                                                {new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(p.precio)} CLP
                                            </span>
                                        </div>
                                        <div className="d-flex gap-2 justify-content-between align-items-center">
                                            <Link
                                                className="btn btn-sm btn-outline-info"
                                                to={`/tienda/producto-detalle/${p.code}`}
                                            >
                                                <Eye />
                                                Ver detalle
                                            </Link>
                                            <button className="btn btn-sm btn-outline-light d-flex align-items-center gap-2" onClick={
                                                () => addToCart(p.code)
                                            }>
                                                <ShoppingCart />
                                                Añadir al carrito
                                            </button>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                </div>
            </div>
        </section>
    )
}
