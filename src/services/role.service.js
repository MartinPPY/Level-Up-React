import api from "./axios.service"

export const getAllRoles = async () => {
    const response = await api.get('/roles')
    return response.data
}