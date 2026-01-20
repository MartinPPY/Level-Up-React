import { productos } from "../data"

export const getProductos = () => {
    return productos;
}

export const calcularTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}