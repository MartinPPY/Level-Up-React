import { UserForm } from "../../../components/forms/user-form/UserForm"

export const AddUser = ({setUser,formData,setFormData}) => {
    return (
        <>
            <div className="mb-3">
                <h3>Agregar Usuario a la tienda</h3>
                <p>Completa los campos para agregar correctamente a un usuario.</p>
            </div>
            <UserForm setUser={setUser} formData={formData} setFormData={setFormData}/>

        </>
    )
}
