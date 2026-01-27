export const ProductTable = ({ productos }) => {
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
