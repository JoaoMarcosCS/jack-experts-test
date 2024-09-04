import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"
import { UpdateUserRequest } from "../interfaces/update-user.interface";

export interface UpdateUserResponse{ 
    ok: boolean;
}

export const updateUser = async (data: UpdateUserRequest) => {
    const response = await api.patch<UpdateUserResponse>(`${endpointsApi.user}/${data.id}`, data.body );

    return response.data;
}