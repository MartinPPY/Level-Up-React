import { useEffect, useState } from "react"
import { AddProducts } from "./AddProducts"
import { ProductTable } from "./ProductTable"
import { getAllProducts } from "../../../services/product.service"

export const Products = ({ role }) => {

    const [productos, setProductos] = useState([])
    const [isEditing, setIsEditing] = useState(false)
    const [editingProductCode, setEditingProductCode] = useState(null)
    const [formData, setFormData] = useState({
        codigo: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        stockCritico: "",
        categoria: "",
        imagen: ""
    })

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

            {
                (role === 'ROLE_ADMIN') && (
                    <div className="row card p-2 mb-3">
                        <h3>Agregar Producto</h3>
                        <p>Ingresa los datos del producto</p>
                        <AddProducts
                            setProductos={setProductos}
                            formData={formData}
                            setFormData={setFormData}
                            isEditing={isEditing}
                            setIsEditing={setIsEditing}
                            editingProductCode={editingProductCode}
                            setEditingProductCode={setEditingProductCode}
                        />

                    </div>
                )
            }

            <div className="row card p-2">
                <ProductTable
                    productos={productos}
                    setProductos={setProductos}
                    formData={formData}
                    setFormData={setFormData}
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    setEditingProductCode={setEditingProductCode}
                    role={role}

                />
            </div>
        </main>
    )
}
