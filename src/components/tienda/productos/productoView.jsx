import { useEffect, useState } from "react";
import { getProductos } from "../../../Service/productoService";
import { ProductoCardView } from "./ProductoCardView"; // Asegúrate de crear este archivo o incluirlo aquí

export const ProductoView = ({ handler }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(getProductos());
    }, []);

    return (
        <div className="row">
            {products.map(prod => (
                <div className="col-lg-4 col-md-6 col-12 my-3" key={prod.codigo}>
                    <div className="card bg-dark text-white border-secondary h-100 shadow">
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title text-info">{prod.name}</h5>
                            <p className="card-text small text-secondary">{prod.description}</p>
                            <div className="mt-auto">
                                <p className="fw-bold fs-4">${prod.price}</p>
                                <button 
                                    className="btn btn-primary w-100" 
                                    onClick={() => handler(prod)}
                                >
                                    Agregar al carrito
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};