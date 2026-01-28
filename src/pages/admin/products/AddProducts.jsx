import { ProductForm } from "../../../components/forms/products-form/ProductForm"

export const AddProducts = ({setProductos}) => {
    return (
        <>
            <ProductForm setProductos={setProductos} />
        </>
    )
}
