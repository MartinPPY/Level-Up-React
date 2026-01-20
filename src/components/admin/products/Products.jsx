import { AddProducts } from "./AddProducts"
import { ProductTable } from "./ProductTable"

export const Products = () => {
    return (
        <main className="container-fluid p-5">
            <div className="d-flex justify-content-between align-items-center mb-4">
                <div>
                    <h1>Productos</h1>
                    <p>Gestiona los productos de la tienda</p>
                </div>
                <AddProducts />
            </div>
            <div className="row card p-2">
                <ProductTable />
            </div>
        </main>
    )
}
