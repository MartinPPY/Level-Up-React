import { UserTable } from "./UserTable"
import { AddUser } from "./AddUser"
import { useEffect, useState } from "react"
import { getAllUsers } from "../../../services/user.service"

export const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        const getAllUsersData = async () => {
            const users = await getAllUsers()
            setUsers(users)
        }
        getAllUsersData()
    }, [])

    return (
        <main className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Usuarios</h1>
                    <p>Gestiona los usuarios de la tienda</p>
                </div>
            </div>

            <section className="row card p-2 mb-3">
                <AddUser setUser={setUsers} />
            </section>

            <section className="row card p-2">
                <UserTable users={users} />
            </section>

        </main>
    )
}
