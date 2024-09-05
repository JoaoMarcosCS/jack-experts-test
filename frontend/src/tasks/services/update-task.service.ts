import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface UpdateTaskRequest {
    taskId: number;
    body: {
        title?: string;
        description?: string;
    }
}

export interface UpdateTaskResponse {
    ok: boolean;
}

export const updateTask = async (updateTaskBody: UpdateTaskRequest) => {
    const response = await api.patch<UpdateTaskResponse>(`${endpointsApi.task}/${updateTaskBody.taskId}`, updateTaskBody.body);

    return response.data;
}