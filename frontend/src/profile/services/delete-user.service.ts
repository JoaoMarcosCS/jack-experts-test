import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"
import { DeleteUserParams } from "../interfaces/delete-user.params";

export interface RemoveUserResponse{ 
    ok: boolean;
}

export const deleteUser = async ({id}: DeleteUserParams) => {
    const response = await api.delete<RemoveUserResponse>(`${endpointsApi.user}/${id}`);

    return response.data;
}