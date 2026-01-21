import { Eye, ShoppingCart } from "lucide-react"
import { productos } from "../../../data/data"
import { useCart } from "../../../context/CartContext"
import { Link } from "react-router-dom"


export const Product = () => {

    const { setCart, cart } = useCart()

    const addToCart = (codigo) => {

        const producto = productos.find((p) => p.codigo === codigo)
        
        if(!producto) return

        setCart(prevCart =>
            prevCart.some(item => item.codigo === codigo)
                ? prevCart.map(item =>
                    item.codigo === codigo
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
                : [...prevCart, { ...producto, cantidad: 1 }]
        )

    }

    return (
        <section className="container py-5">
            <div className="text-center mb-5 text-white">
                <h2 className="fw-bold">Productos destacados</h2>
                <p>Una selección de nuestros productos más populares</p>
            </div>

            <div className="scroll" style={{ overflowX: 'hidden', height: '700px', scrollbarWidth: 'thin' }}>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        productos.map((p) => (
                            <div className="col" key={p.codigo}>
                                <div className="card bg-black text-white h-100 border-secondary tienda-cart">
                                    <img src={p.image} alt={p.nombre} className="card-img-top" />
                                    <div className="card-body">
                                        <h5 className="card-title">{p.nombre}</h5>
                                        <p className="card-text">{p.categoria}</p>
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
                                                to={`/tienda/producto-detalle/${p.codigo}`}
                                            >
                                                <Eye />
                                                Ver detalle
                                            </Link>
                                            <button className="btn btn-sm btn-outline-light d-flex align-items-center gap-2" onClick={() => addToCart(p.codigo)}>
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
