import { Eye, ShoppingCart, ShoppingCartIcon } from "lucide-react"
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
            showToast('Error al añadir el producto', 'error')
        }
    }

    return (
        <section className="container py-5">
            <div className="text-center mb-5 text-white">
                <h2 className="fw-bold">Productos destacados</h2>
                <p>Una selección de nuestros productos más populares</p>
            </div>

            <div className="scroll">
                <div className="row">
                    {
                        productos.length > 0 ? productos.map((p, index) => (
                            <div className="col-lg-4 col-md-6 col-12 my-3" key={index}>
                                <div className="card bg-dark text-white border-secondary h-100 shadow">
                                    <img
                                        src={p.image}
                                        className="card-img-top p-2 rounded"
                                        alt={p.nombre}
                                        style={{ height: "200px", objectFit: "contain" }}
                                    />

                                    <div className="card-body d-flex flex-column">
                                        <h5 className="card-title text-info">
                                            {p.name}
                                        </h5>

                                        <p className="card-text small text-secondary text-truncate">
                                            {p.description}
                                        </p>

                                        <div className="mt-auto">
                                            <p className="fw-bold fs-4">
                                                ${p.precio.toLocaleString()}
                                            </p>

                                            <div className="d-grid gap-2">
                                                <button
                                                    className="btn btn-info"
                                                    onClick={() => addToCart(p.code)}
                                                >
                                                    <i className="bi bi-cart-plus me-2"></i>
                                                    Agregar al carrito <ShoppingCart className="me-2" />
                                                </button>

                                                <Link
                                                    className="btn btn-outline-success btn-sm"
                                                    to={`/tienda/producto-detalle/${p.code}`}
                                                >
                                                    Ver descripción <Eye className="me-2" />
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : <div className="col-12 text-center text-white">No hay productos disponibles</div>
                    } 

                </div>
            </div>
        </section>
    )
}
