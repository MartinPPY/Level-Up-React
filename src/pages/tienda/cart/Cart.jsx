import Swal from "sweetalert2"
import { useCart } from "../../../context/CartContext"
import { productos } from "../../../data/data"

export const Cart = () => {

    const { setCart, cart } = useCart()

    const addToCart = (codigo) => {
        const producto = productos.find((p) => p.codigo === codigo)
        if (!producto) return

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

    const delToCart = (codigo) => {
        setCart(prevCart =>
            prevCart
                .map(item =>
                    item.codigo === codigo
                        ? { ...item, cantidad: item.cantidad - 1 }
                        : item
                )
                .filter(item => item.cantidad > 0)
        )
    }

    const clearCart = () => {
        setCart([])
    }

    const comprar = () =>{
        Swal.fire({
            title: 'Compra realizada',
            text: 'Tu compra ha sido realizada correctamente',
            icon: 'success',
            confirmButtonText: 'Aceptar'
        })
        clearCart()
    }

    return (
        <main className="container-fluid text-white">
            <section className="row">
                <h1 className="">Mis compras</h1>
                <div className="col-lg-8">
                    {
                        cart.map((item, index) => (
                            <div className="card mb-3 cart-item bg-dark text-white border" key={index}>
                                <div className="row g-0 align-items-center">
                                    <div className="col-md-3 text-center">
                                        <img src={item.image} className="img-fluid rounded" alt="Producto" />
                                    </div>
                                    <div className="col-md-5">
                                        <div className="card-body">
                                            <h5 className="card-title mb-1">{item.nombre}</h5>
                                            <p className="card-text text-white">{item.categoria}</p>
                                            <p className="card-text text-white">{item.precio.toLocaleString('es-CL')} CLP</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => delToCart(item.codigo)}>−</button>
                                            <span className="mx-3 cantidad">{item.cantidad}</span>
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => addToCart(item.codigo)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="col-lg-4 p-5 d-flex flex-column gap-5 border-start border-top text-white">
                    <div className="d-flex justify-content-around">
                        <h3>Total:</h3>
                        <h3>{cart.reduce((acc, item) => (acc + item.precio * item.cantidad * 0.8), 0).toLocaleString('es-CL')} CLP</h3>
                    </div>
                    <div className="d-flex flex-column gap-3">
                        <fieldset className="d-flex flex-column">
                            <label htmlFor="cupon" className="form-label"> Cupon de descuento </label>
                            <input type="text" placeholder="Ingresa cupon" id="cupon" className="form-control" />
                        </fieldset>
                        <button className="btn btn-sm btn-warning"> Agregar cupon </button>
                    </div>

                    <p className="text-center text-warning"> Tienes un descuento del 20% </p>

                    <div className="d-flex flex-column gap-4 ">
                        <button className="btn btn-info" onClick={comprar}> Comprar </button>
                        <button className="btn btn-sm btn-success" onClick={clearCart}> Vaciar carrito
                        </button>
                    </div>
                </div>
            </section>



        </main>
    )
}
