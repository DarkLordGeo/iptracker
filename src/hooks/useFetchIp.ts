import { api } from "../client/api"


const useFetchIp = async ({ searchTerm }: any) => {
    try {
        const res = await api.get(`/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${searchTerm}`)
        return res.data
    }
    catch (error) {
        return error
    }
}



export default useFetchIp
