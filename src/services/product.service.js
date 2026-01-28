import api from "./axios.service"

export const getAllProducts = async () => {
    const response = await api.get("/productos")
    return response.data
}

export const createProduct = async (product) => {
    const response = await api.post("/productos", product)
    return response.data
}

export const deleteProduct = async (code) => {
    const response = await api.delete(`/productos/${code}`)
    return response.data
}

export const getProductByCode = async (code) => {
    const response = await api.get(`/productos/${code}`)
    return response.data
}

export const updateProduct = async (code, product) => {
    const response = await api.put(`/productos/${code}`, product)
    return response.data
}
