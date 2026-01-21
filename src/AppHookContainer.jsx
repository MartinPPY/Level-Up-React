import App from "./App"
import { AppRouter } from "./AppRouter"
import { CartProvider } from "./context/CartContext"


export const AppHookContainer = () => {
    return (
        <CartProvider>
            <App>
                <AppRouter />
            </App>
        </CartProvider>
    )
}
