import { Task } from "../../interfaces/task.interface";
import { api } from "../../services/axios"
import { endpointsApi } from "../../utils/endpoints"

export interface SearchRequest{
    userId: number;
    search: string;
}

export interface SearchResponse{ 
    tasks: Task[] | []
}

export const searchTask = async ({userId, search}: SearchRequest) => {
    const response = await api.post<SearchResponse>(`${endpointsApi.searchTask}/${userId}`, {search});

    return response.data
}