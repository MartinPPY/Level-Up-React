import { ProductForm } from "../../../components/forms/products-form/ProductForm"

export const AddProducts = ({ setProductos, formData, setFormData, setEditingProductCode, editingProductCode, isEditing, setIsEditing }) => {
    return (
        <>
            <ProductForm
                setProductos={setProductos}
                formData={formData}
                setFormData={setFormData}
                editingProductCode={editingProductCode}
                setEditingProductCode={setEditingProductCode}
                isEditing={isEditing}
                setIsEditing={setIsEditing}
            />
        </>
    )
}
