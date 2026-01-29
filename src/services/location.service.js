import api from "./axios.service"

export const getLocations = async () => {

    const regionsResponse = (await api.get("/api/v1/locations/regiones")).data
    const comunasResponse = (await api.get("/api/v1/locations/comunas")).data

    return {
        regions: regionsResponse,
        comunas: comunasResponse
    }

}