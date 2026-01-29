import Swal from "sweetalert2"
import { deleteProduct, getAllProducts, getProductByCode } from "../../../services/product.service"

export const ProductTable = ({ productos, setProductos, setFormData, setIsEditing, setEditingProductCode, role }) => {

    const deleteHandle = async (id) => {

        try {

            Swal.fire({
                icon: "warning",
                title: "¿Estas seguro de eliminar este usuario?",
                text: "No podrás revertir esta acción",
                showCancelButton: true,
                confirmButtonText: "Eliminar",
                cancelButtonText: "Cancelar"
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await deleteProduct(id)
                    Swal.fire({
                        icon: "success",
                        title: "Producto eliminado correctamente",
                        showConfirmButton: false,
                        timer: 2000
                    }).then(async () => {
                        const productos = await getAllProducts()
                        setProductos(productos)
                    })
                }
            })

        } catch (error) {
            console.error(error)
        }
    }

    const updateHandle = async (code) => {
        try {
            const product = await getProductByCode(code)

            setFormData({
                codigo: product.code,
                nombre: product.name,
                descripcion: product.description,
                precio: product.precio,
                stock: product.stock,
                stockCritico: product.stockCritico,
                categoria: product.category,
                imagen: ""
            })

            setIsEditing(true)
            setEditingProductCode(code)

        } catch (error) {
            console.error(error)
        }

    }

    return (
        <div className="col-12 p-3">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Codigo</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Precio</th>
                            {role === 'ROLE_ADMIN' && <th scope="col">Acciones</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            productos.map((producto, index) => (
                                <tr key={index}>
                                    <th scope="row">{producto.code}</th>
                                    <td>{producto.name}</td>
                                    <td>{Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(producto.precio)}</td>
                                    <td className="d-flex gap-3">
                                        {role === 'ROLE_ADMIN' && (
                                            <>
                                                <button className="btn btn-sm btn-dark" onClick={() => updateHandle(producto.code)} >Editar</button>
                                                <button className="btn btn-sm btn-danger" onClick={() => deleteHandle(producto.code)} >Eliminar</button>
                                            </>
                                        )}
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

            </div>

        </div>
    )
}
