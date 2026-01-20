import { useEffect, useState } from "react"
import { calculateTotal } from "../../Service/productoService";
import { useNavigate } from "react-router-dom";


export const cartView = ({handlerDelete, items}) =>{
    
    const [total,setTotal ] = useState(0);
    const navigate = useNavigate();
    useEffect(() =>{
        setTotal(calcularTotal(items));
    },[items]);
    const onDeleteProduct = (id) =>{
        handlerDelete(id);
    }
    const oncatalog = () =>{
        navigate("/products")
    }
    return(
        <>
        <h2>CARRITO</h2>
        <table className="table table-hover table-striped">
            <head>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Total</th>
                    <th>Eliminar</th>
                </tr>
            </head>
            <tbody>
                {items.map(itmes =>{
                    <tr key={items.product.codigo}>
                        <td>{item.product.name}</td>
                        <td>{item.product.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.quantity * item.product.price}</td>
                        <td><buton
                            className="btn btn-danger"
                            onclick={() => onDeleteProduct(item.product.codigo)}>Eliminar</buton></td>
                    </tr>
                })}
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan="3" className="text-end fw-bold">Total</td>
                    <td colSpan="2" className="text-start fw-bold">{ total }</td>
                </tr>
            </tfoot>
        </table>
        <button
        className="btn btn-success"
        onclick={oncatalog}>Seguir Comprando</button>
        
    </>
    )
}