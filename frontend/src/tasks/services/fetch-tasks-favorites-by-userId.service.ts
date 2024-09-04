import { Task } from "../../interfaces/task.interface";
import { api } from "../../services/axios";
import { endpointsApi } from "../../utils/endpoints";
import { FetchTasksParams } from "../interfaces/fetch-tasks-params";

interface FetchTasksFavoritesResponse{
    tasks: Task[]
}

const fetchTasksFavoritesByUserId = async({userId}: FetchTasksParams) => {

    const response = await api.get<FetchTasksFavoritesResponse>(`${endpointsApi.favorites}/${userId}`);
    return response.data
}

export {fetchTasksFavoritesByUserId};