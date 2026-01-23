import App from "./App"
import { AppRouter } from "./AppRouter"
import { AuthProvider } from "./context/AuthContext"
import { CartProvider } from "./context/CartContext"
import { ToastProvider } from "./context/ToastContext"


export const AppHookContainer = () => {
    return (
        <AuthProvider>
            <ToastProvider>
                <CartProvider>
                    <App>
                        <AppRouter />
                    </App>
                </CartProvider>
            </ToastProvider>
        </AuthProvider>
    )
}
