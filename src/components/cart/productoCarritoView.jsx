import { useNavigate } from "react-router-dom";

export const ProductoCarritoView = ({ handler, codigo, name, description, price }) => {

    const navigate = useNavigate();

    const onAddProduct = (product) => {
        console.log(producto);
        handler(producto);
        navigate('/cart');
    }
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text">$ {price}</p>
                    <button className="btn btn-primary"
                        onClick={() => onAddProduct({ codigo, name, description, price })}>Agregar</button>
                </div>
            </div>
        </>
    )
}