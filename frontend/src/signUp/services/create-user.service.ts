import { api } from "@/services/axios"
import { endpointsApi } from "@/utils/endpoints"
import { CreateUserInterface } from "../interfaces/create-user.interface"

export const CreateUserService = async (createUserBody: CreateUserInterface) => {
    const response = await api.post<boolean>(endpointsApi.user, createUserBody)

    return response.data
}