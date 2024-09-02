import { api } from "../services/axios"

export const removeTokenFromHeader = () => {
    delete api.defaults.headers.Authorization;
}