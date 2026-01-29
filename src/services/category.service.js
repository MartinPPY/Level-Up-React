import api from "./axios.service"


export const getAllCategories = async () => {

    const response = await api.get('/api/v1/categories')
    return response.data
}