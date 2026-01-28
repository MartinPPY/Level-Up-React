import { useEffect, useState } from "react"
import { AddProducts } from "./AddProducts"
import { ProductTable } from "./ProductTable"
import { getAllProducts } from "../../../services/product.service"

export const Products = () => {

    const [productos, setProductos] = useState([])

    useEffect(() => {
        const getAllProductos = async () => {
            const response = await getAllProducts()
            setProductos(response)
        }
        getAllProductos()
    }, [])

    return (
        <main className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Productos</h1>
                    <p>Gestiona los productos de la tienda</p>
                </div>
            </div>

            <div className="row card p-2 mb-3">
                <h3>Agregar Producto</h3>
                <p>Ingresa los datos del producto</p>
                <AddProducts setProductos={setProductos}  />
            </div>

            <div className="row card p-2">
                <ProductTable productos={productos} />
            </div>
        </main>
    )
}
