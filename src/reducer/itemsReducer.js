import { AddProductCart, DeleteProductCart, UpdateQuantityProductCart } from "./itemsActions";

export const itemsReducer = (state = [], action) => {
    switch (action.type) {
        case AddProductCart:
            return [
                ...state,
                {
                    product: action.payload,
                    quantity: 1,
                }
            ];

        case UpdateQuantityProductCart:
            return state.map((i) => {
                if (i.product.codigo === action.payload.codigo) {
                    return { ...i, quantity: i.quantity + 1 };
                }
                return i;
            });

        case DeleteProductCart:
            // Filtramos usando codigo
            return state.filter((i) => i.product.codigo !== action.payload);

        default:
            return state;
    }
};