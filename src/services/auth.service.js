import api from "./axios.service"


export const login = async (email, password) => {
    const response = await api.post("/login", {
        email,
        password
    })
    return response.data
}

export const isAuthenticated = async () => {
    const response = await api.get("/auth/me")
    return response.data
}