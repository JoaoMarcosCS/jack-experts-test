import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface DeleteTaskParams{
    taskId: number
}

export interface DeleteTaskResponse{ 
    ok: boolean;
}

export const deleteTask = async ({taskId}: DeleteTaskParams) => {
    const response = await api.delete<DeleteTaskResponse>(`${endpointsApi.task}/${taskId}`);

    return response.data;
}