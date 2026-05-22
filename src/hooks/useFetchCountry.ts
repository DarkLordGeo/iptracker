import { api_country } from "../client/api"


const useFetchCountry = async ({ country }: any) => {
    try {
        const res = await api_country.get(`/v1/city?name=${country}`)
        return res.data
    }
    catch (err) {
        console.log('error', err)
    }

}
export default useFetchCountry