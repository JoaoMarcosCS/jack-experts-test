import axios from "axios"

const api = axios.create({
    // baseURL: "http://localhost:3001"
    baseURL:"https://jack-experts-api.vercel.app"
})

export {api};