import Swal from "sweetalert2"
import { deleteProduct, getAllProducts } from "../../../services/product.service"

export const ProductTable = ({ productos }) => {

    const deleteHandle = async (id) => {

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
                    const productos = await getAllProductss()
                })
            }
        })

        try {

        } catch (error) {
            console.error(error)
        } finally {

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
                            <th scope="col">Acciones</th>
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
                                        <button className="btn btn-sm btn-dark" >Editar</button>
                                        <button className="btn btn-sm btn-danger" >Eliminar</button>
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
