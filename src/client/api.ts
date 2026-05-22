import axios from 'axios'


export const api = axios.create({
    "baseURL": `https://geo.ipify.org`
})

export const api_country = axios.create({
    "baseURL": "https://api.api-ninjas.com",
    "headers": {
        "X-Api-Key": "RC0UTvPI83uoKA1noyDADEETcFdXIadyhNvlynN5"
    }
})


