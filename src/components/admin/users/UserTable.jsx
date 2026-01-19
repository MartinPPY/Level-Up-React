export const UserTable = () => {
    return (
        <div className="col-12 p-3">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Rut</th>
                            <th scope="col">Nombres</th>
                            <th scope="col">Correo Electrónico</th>
                            <th scope="col">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">21340282K</th>
                            <td>Martin Romero</td>
                            <td>martin.se@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-dark" >Editar</button>
                                <button className="btn btn-sm btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">21340282K</th>
                            <td>Martin Romero</td>
                            <td>martin.se@gmail.com</td>
                            <td className="d-flex gap-3">
                                <button className="btn btn-sm btn-dark" >Editar</button>
                                <button className="btn btn-sm btn-danger" >Eliminar</button>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row">21340282K</th>
                            <td>Martin Romero</td>
                            <td>martin.se@gmail.com</td>
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
