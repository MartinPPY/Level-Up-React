import { createContext, useContext, useEffect, useState } from "react"

export const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(()=>{
        const storedCart  =localStorage.getItem("cart")
        return storedCart ? JSON.parse(storedCart) : []
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart))
    }, [cart])

    return (
        <CartContext.Provider value={{ cart, setCart }}>
            {children}
        </CartContext.Provider>
    )
}

//Hook para utilizar el contexto
export const useCart = () => {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("useCart must be used within a CartProvider")
    }
    return context
}


