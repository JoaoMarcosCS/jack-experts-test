import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface UnsetTaskAsFavoriteParams{
    taskId: number
}

export interface UnsetTaskAsFavoriteResponse{ 
    ok: boolean;
}

export const unsetTaskAsFavorite = async ({taskId}: UnsetTaskAsFavoriteParams) => {
    const response = await api.patch<UnsetTaskAsFavoriteResponse>(`${endpointsApi.task}/${taskId}`, {isFavorite: false});

    return response.data;
}