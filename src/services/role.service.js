import api from "./axios.service"

export const getAllRoles = async () => {
    const response = await api.get('/api/v1/roles')
    return response.data
}