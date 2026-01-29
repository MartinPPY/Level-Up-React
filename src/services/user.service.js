import api from "./axios.service"

export const getAllUsers = async () => {
    const response = await api.get("/api/v1/users")
    return response.data
}

export const createUser = async (user) => {
    const response = await api.post("/api/v1/users", user)
    return response.data
}

export const deleteUser = async (id) => {
    const response = await api.delete(`/api/v1/users/${id}`)
    return response.data

}

export const getUserById = async (id) => {
    const response = await api.get(`/api/v1/users/${id}`)
    return response.data
}

export const editUser = async (id,user)=>{
    const response = await api.put(`/api/v1/users/${id}`, user)
    return response.data
}