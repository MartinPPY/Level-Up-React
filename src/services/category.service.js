import api from "./axios.service"


export const getAllCategories = async () => {

    const response = await api.get('/categories')
    return response.data
}