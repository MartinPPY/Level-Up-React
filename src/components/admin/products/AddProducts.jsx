import { ProductForm } from "../../forms/products-form/ProductForm"

export const AddProducts = () => {
    return (
        <>
            <button className="btn btn-dark" data-bs-toggle="modal" data-bs-target="#adminproductsmodal">Agregar Producto</button>

            <div className="modal fade" id="adminproductsmodal" tabIndex="-1" aria-labelledby="adminproductsmodallabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="adminproductsmodallabel">Agregar Producto</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <ProductForm />
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
