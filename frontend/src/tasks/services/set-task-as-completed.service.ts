import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface SetTaskAsCompletedParams{
    taskId: number
}

export interface SetTaskAsCompletedResponse{ 
    ok: boolean;
}

export const setTaskAsCompleted = async ({taskId}: SetTaskAsCompletedParams) => {
    const response = await api.patch<SetTaskAsCompletedResponse>(`${endpointsApi.task}/${taskId}`, {status: "completed"});

    return response.data;
}