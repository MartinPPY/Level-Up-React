export const UserTable = ({ users }) => {

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
                        {
                            users.map((user,index) => (
                                <tr key={index}>
                                    <th scope="row">{user.run}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
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
