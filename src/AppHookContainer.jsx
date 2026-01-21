import App from "./App"
import { AppRouter } from "./AppRouter"
import { CartProvider } from "./context/CartContext"
import { ToastProvider } from "./context/ToastContext"


export const AppHookContainer = () => {
    return (
        <ToastProvider>
            <CartProvider>
                <App>
                    <AppRouter />
                </App>
            </CartProvider>
        </ToastProvider>
    )
}
