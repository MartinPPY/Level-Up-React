import { useParams } from "react-router-dom"
import { productos } from "../../../data/data"
import { useCart } from "../../../context/CartContext"
import { useEffect, useState } from "react"
import { useToast } from '../../../context/ToastContext'
import { useAuth } from "../../../context/AuthContext"
import { useNavigate } from "react-router-dom"
import { getProductByCode } from "../../../services/product.service"

export const ProductDetail = () => {

    const { codigo } = useParams()
    const { setCart, cart } = useCart()
    const { showToast } = useToast()
    const { authenticated } = useAuth()
    const [producto, setProducto] = useState({})
    const [quantity, setQuantity] = useState(1)
    const navigate = useNavigate()

    useEffect(() => {
        const getProductDetails = async () => {
            const response = await getProductByCode(codigo)
            setProducto(response)            
        }

        getProductDetails()
    },[])

    const addToCart = (e) => {
        e.preventDefault()
        const producto = productos.find((p) => p.codigo === codigo)


        if (!producto) return

        if (!authenticated) {
            navigate("/tienda/login")
            return
        }

        setCart(prevCart =>
            prevCart.some(item => item.codigo === codigo)
                ? prevCart.map(item =>
                    item.codigo === codigo
                        ? { ...item, cantidad: parseInt(item.cantidad) + parseInt(quantity) }
                        : item
                )
                : [...prevCart, { ...producto, cantidad: quantity }]
        )

        showToast("Producto agregado al carrito", "success")

    }

    return (
        <main className="container-fluid text-white">

            <section className="row" id="product-detail">
                <div className="col-12 col-lg-8 py-5 border d-flex justify-content-center">
                    <img src={producto.image} alt="producto" className="img-fluid" width="75%" />
                </div>
                <div className="col-12 col-lg-4 py-5 border d-flex flex-column gap-3">
                    <div className="p-2">
                        <span>SKU: {producto.code} </span>
                        <h2 >{producto.name}</h2>
                        <span >{new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.precio)} CLP</span>
                    </div>
                    <div className="border"></div>
                    <p >{producto.description}</p>
                    <div className="border"></div>
                    <form className="d-flex flex-column gap-3 justify-content-between">
                        <fieldset className="d-flex flex-column gap-2 mb-3">
                            <label htmlFor="quantity" className="form-label">Cantidad:</label>
                            <input type="number" id="quantity" min="1" className="form-control form-control-sm" placeholder="ingresa la cantidad" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
                        </fieldset>
                        <button type="submit" className="btn btn-outline-info" onClick={addToCart}>Agregar al carrito</button>
                    </form>
                </div>
            </section>

        </main>
    )
}
