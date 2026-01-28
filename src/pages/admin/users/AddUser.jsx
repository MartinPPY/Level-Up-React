import { UserForm } from "../../../components/forms/user-form/UserForm"

export const AddUser = ({setUser,formData,setFormData,isEditing, setIsEditing, editingUserId, setEditingUserId}) => {
    return (
        <>
            <div className="mb-3">
                <h3>{isEditing ? "Editar Usuario" : "Agregar Usuario"}</h3>
                <p>Completa los campos para {isEditing ? "editar" : "agregar"} correctamente a un usuario.</p>
            </div>
            <UserForm 
                setUser={setUser} 
                formData={formData} 
                setFormData={setFormData}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
                editingUserId={editingUserId}
                setEditingUserId={setEditingUserId}
            />

        </>
    )
}
