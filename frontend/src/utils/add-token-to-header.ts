import { api } from "../services/axios"

export const addTokenToHeader = (accessToken: string) => {
    api.defaults.headers.Authorization = `Bearer ${accessToken}`
}