import { createContext, useContext, useEffect, useState } from "react";
import { isAuthenticated } from "../services/auth.service";


export const AuthContext = createContext({})

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error("useAuth must be used within a AuthProvider")
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [authenticated, setAuthenticated] = useState(false)

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const response = await isAuthenticated()
                setAuthenticated(() => response ? true : false)
            } catch (error) {
                setAuthenticated(false)
            }

        }
        checkAuth()
    }, [])

    return (
        <AuthContext.Provider value={{ authenticated, setAuthenticated }}>
            {children}
        </AuthContext.Provider>
    )



}
