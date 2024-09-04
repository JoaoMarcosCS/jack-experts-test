import { Task } from "../../interfaces/task.interface";
import { api } from "../../services/axios";
import { endpointsApi } from "../../utils/endpoints";
import { FetchTasksParams } from "../interfaces/fetch-tasks-params";


interface FetchTasksResponse{
    tasks: Task[]
}

const fetchTasksByUserId = async({userId}: FetchTasksParams) => {

    const response = await api.get<FetchTasksResponse>(`${endpointsApi.task}/${userId}`);
    return response.data
}

export {fetchTasksByUserId};