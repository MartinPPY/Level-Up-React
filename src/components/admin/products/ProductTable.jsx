export const ProductTable = () => {
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
                        <tr>
                            <th scope="row">1</th>
                            <td>Producto 1</td>
                            <td>$100</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-dark" >Editar</button>
                                <button className="btn btn-sm btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Producto 2</td>
                            <td>$200</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-dark" >Editar</button>
                                <button className="btn btn-sm btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>Producto 3</td>
                            <td>$300</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-dark" >Editar</button>
                                <button className="btn btn-sm btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

            </div>

        </div>
    )
}
