import { api } from "../client/api"

// const api_key = 'at_iu6FgSDL0Be2d7QEFJJgisyFhMlv2'

const useFetchIp = async ({ searchTerm }: string) => {
    try {
        const res = await api.get(`/api/v2/country?apiKey=${import.meta.env.VITE_API_KEY}&ipAddress=${searchTerm}`)
        return res.data
    }
    catch (error) {
        return error
    }
}



export default useFetchIp
