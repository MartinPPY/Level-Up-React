import Swal from "sweetalert2"
import { deleteUser, getAllUsers, getUserById } from "../../../services/user.service"
import { getLocations } from "../../../services/location.service"

export const UserTable = ({ users, setUsers, setFormData }) => {

    const deleteUserHandle = async (id) => {
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
                    await deleteUser(id)
                    Swal.fire({
                        icon: "success",
                        title: "Usuario eliminado correctamente",
                        showConfirmButton: false,
                        timer: 2000
                    }).then(async () => {
                        const users = await getAllUsers()
                        setUsers(users)
                    })
                }
            })
        } catch (error) {
            console.error(error)
        }
    }

    const findUserByIdHandler = async (id) => {
        const response = await getUserById(id)
        const locations = await getLocations()
        const comuna = locations.comunas.find(comuna => comuna.id === response.comunaId)

        console.log(comuna)
        
        setFormData(
            {
                run: response.run,
                name: response.name,
                lastName: response.lastname,
                email: response.email,
                birthday: response.birthday,
                userType: response.role,
                region: comuna.region.id,
                comuna: comuna.id,
                addres: response.addres,
                password: "",
                confirmPassword: ""
            }
        )

    }

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
                            users.map((user, index) => (
                                <tr key={index}>
                                    <th scope="row">{user.run}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td className="d-flex gap-3">
                                        <button className="btn btn-sm btn-dark" onClick={()=>findUserByIdHandler(user.id)} >Editar</button>
                                        <button className="btn btn-sm btn-danger" onClick={() => deleteUserHandle(user.id)}>Eliminar</button>
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
