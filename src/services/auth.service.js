import api from "./axios.service"


export const login = async (email, password) => {
    const response = await api.post("/login", {
        email,
        password
    })
    return response.data
}

export const isAuthenticated = async () => {
    const response = await api.get("/api/v1/auth/me")
    return response.data
}

export const registerUser = async(user)=>{
    const response = await api.post("/api/v1/auth/register",user)
    return response.data
}

export const isAdmin = async ()=>{
    const response = await api.get("/api/v1/auth/isadmin")
    return response.data
}