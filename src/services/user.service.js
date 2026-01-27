import api from "./axios.service"

export const getAllUsers = async () => {
    const response = await api.get("/users")
    return response.data
}

