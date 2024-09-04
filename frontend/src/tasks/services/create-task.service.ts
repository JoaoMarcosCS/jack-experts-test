import { endpointsApi } from "../../utils/endpoints"
import { api } from "../../services/axios"

export interface CreateTaskBody{
    userId: number;
    title: string;
    description: string;
}

export interface CreateTaskResponse{ 
    ok: boolean;
}

export const createTask = async (createTaskBody: CreateTaskBody) => {
    console.log("BODY:" + JSON.stringify(createTaskBody));
    const response = await api.post<CreateTaskResponse>(endpointsApi.task, createTaskBody);

    return response.data;
}