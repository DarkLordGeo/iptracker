import { api } from "../client/api"



const api_key = 'at_iu6FgSDL0Be2d7QEFJJgisyFhMlv2'


const useFetchRequests = async () => {
    // https://geo.ipify.org/service/account-balance?apiKey=at_iu6FgSDL0Be2d7QEFJJgisyFhMlv2
    try {
        const res = await api.get(`/service/account-balance?apiKey=at_iu6FgSDL0Be2d7QEFJJgisyFhMlv2`)
        console.log(res)
    }
    catch (error) {
        return error
    }
}
export default useFetchRequests