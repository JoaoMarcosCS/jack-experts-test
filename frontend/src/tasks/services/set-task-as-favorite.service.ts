import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface SetTaskAsFavoriteParams{
    taskId: number
}

export interface SetTaskAsFavoriteResponse{ 
    ok: boolean;
}

export const setTaskAsFavorite = async ({taskId}: SetTaskAsFavoriteParams) => {
    const response = await api.patch<SetTaskAsFavoriteResponse>(`${endpointsApi.task}/${taskId}`, {isFavorite: true});

    return response.data;
}