import Swal from "sweetalert2"
import { useCart } from "../../../context/CartContext"
import { useToast } from '../../../context/ToastContext'
import { useNavigate } from "react-router-dom"
import { useAuth } from "../../../context/AuthContext"
import { useEffect, useState } from "react"
import { isAuthenticated } from "../../../services/auth.service"
import { createVenta } from "../../../services/venta.service"

export const Cart = () => {

    const [loading, setLoading] = useState(false)

    const { setCart, cart } = useCart()
    const { showToast } = useToast()
    const { authenticated } = useAuth()

    const navigate = useNavigate()

    useEffect(() => {
        if (!authenticated) {
            setCart([])
            navigate("/tienda/login")

        }

    }, [])

    const addToCart = (codigo) => {
        if (!authenticated) {
            navigate("/tienda/login")
            return
        }

        for (let item of cart) {
            if (codigo === item.code) {
                if (item.stock === 0) {
                    showToast('Producto agotado', 'info')
                    return
                }
                item.cantidad++
                item.stock -= 1
                setCart([...cart])
                showToast(`Producto ${item.name} añadido al carrito`, 'info')
                return
            }

        }

    }

    const delToCart = (codigo) => {
        if (!authenticated) {
            navigate("/tienda/login")
            return
        }

        for (let item of cart) {
            if (codigo === item.code) {
                if (item.cantidad === 1) {
                    setCart(cart.filter(item => item.code !== codigo))
                    showToast(`Producto ${item.name} eliminado del carrito`, 'info')
                    return
                }
                item.cantidad--
                item.stock += 1
                setCart([...cart])
                showToast(`Producto ${item.name} eliminado del carrito`, 'info')
                return
            }
        }


    }

    const clearCart = () => {
        setCart([])
        showToast('Carrito vaciado', 'success')
    }

    const comprar = async () => {
        if (!authenticated) {
            navigate("/tienda/login")
            return
        }

        try {
            setLoading(true)

            const email = await isAuthenticated()
            const venta = [
                ...cart.map(item => ({
                    code: item.code,
                    precio: item.precio,
                    cantidad: item.cantidad,
                    email: email
                }))
            ]

            const response = await createVenta(venta)
            Swal.fire({
                title: 'Compra realizada',
                text: 'Tu compra ha sido realizada correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            })
            setCart([])
            navigate("/tienda")


        } catch (error) {
            Swal.fire({
                title: 'Error',
                text: 'Hubo un error al procesar la compra',
                icon: 'error',
                confirmButtonText: 'Aceptar'
            })
        } finally {
            setLoading(false)
        }

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
                                            <h5 className="card-title mb-1">{item.name}</h5>
                                            <p className="card-text text-white">{item.category.name}</p>
                                            <p className="card-text text-white">{item.precio.toLocaleString('es-CL')} CLP</p>
                                        </div>
                                    </div>
                                    <div className="col-md-4 text-center">
                                        <div className="d-flex justify-content-center align-items-center">
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => delToCart(item.code)}>−</button>
                                            <span className="mx-3 cantidad">{item.cantidad}</span>
                                            <button className="btn btn-outline-secondary btn-sm" onClick={() => addToCart(item.code)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
                <div className="col-lg-4 p-5 d-flex flex-column gap-5 border-start border-top text-white">

                    <div className="d-flex flex-column">
                        <div className="d-flex justify-content-around">
                            <h5>Subtotal:</h5>
                            <h5>{cart.reduce((acc, item) => (acc + item.precio * item.cantidad), 0).toLocaleString('es-CL')} CLP</h5>
                        </div>
                        <div className="d-flex justify-content-around">
                            <h3>Total:</h3>
                            <h3>{cart.reduce((acc, item) => (acc + item.precio * item.cantidad), 0).toLocaleString('es-CL')} CLP</h3>
                        </div>
                    </div>

                    <div className="d-flex flex-column gap-4 ">
                        <button className="btn btn-info" onClick={comprar} disabled={loading}>
                            {loading ? 'Procesando...' : 'Comprar'}
                        </button>
                        <button className="btn btn-sm btn-success" onClick={clearCart}> Vaciar carrito
                        </button>
                    </div>
                </div>
            </section>



        </main>
    )
}
