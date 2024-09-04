import { api } from "@/services/axios"
import { endpointsApi } from "@/utils/endpoints"

export interface SearchRequest{
    userId: number;
    search: string;
}

export const searchTask = async ({userId, search}: SearchRequest) => {
    const response = await api.get(`${endpointsApi.searchTask}/${userId}`, {search})
}