import api from "./axios.service"

export const getAllProducts = async () => {
    const response = await api.get("/api/v1/productos")
    return response.data
}

export const createProduct = async (product) => {
    const response = await api.post("/api/v1/productos", product)
    return response.data
}

export const deleteProduct = async (code) => {
    const response = await api.delete(`/api/v1/productos/${code}`)
    return response.data
}

export const getProductByCode = async (code) => {
    const response = await api.get(`/api/v1/productos/${code}`)
    return response.data
}

export const updateProduct = async (code, product) => {
    const response = await api.put(`/api/v1/productos/${code}`, product)
    return response.data
}
