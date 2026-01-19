import { UserForm } from "../../forms/user-form/UserForm"

export const AddUser = () => {
    return (
        <>
            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#adminusersmodal">Agregar Usuario</button>

            <div className="modal fade" id="adminusersmodal" tabIndex="-1" aria-labelledby="adminusersmodallabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="adminusersmodallabel">Agregar Usuario</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <UserForm/>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
