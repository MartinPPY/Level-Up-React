import api from "./axios.service"

export const getAllProducts = async () => {
    const response = await api.get("/productos")
    return response.data
}

