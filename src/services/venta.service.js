import api from "./axios.service"

export const createVenta = async (venta) => {
    const response = await api.post("/api/v1/sales", venta)
    return response.data
}

export const getVentas = async ()=>{
    const response = await api.get("/api/v1/sales")
    return response.data
}