import api from "./axios.service"

export const getLocations = async () => {

    const regionsResponse = (await api.get("/locations/regiones")).data
    const comunasResponse = (await api.get("/locations/comunas")).data

    return {
        regions: regionsResponse,
        comunas: comunasResponse
    }

}