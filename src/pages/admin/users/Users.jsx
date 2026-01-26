import { UserTable } from "./UserTable"
import { AddUser } from "./AddUser"

export const Users = () => {
    return (
        <main className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Usuarios</h1>
                    <p>Gestiona los usuarios de la tienda</p>
                </div>
            </div>

            <section className="row card p-2 mb-3">
                <AddUser/>                
            </section>

            <section className="row card p-2">                
                <UserTable/>
            </section>

        </main>
    )
}
