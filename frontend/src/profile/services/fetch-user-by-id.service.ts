import { User} from "../../interfaces/user.interface"
import { api } from "../../services/axios";
import { endpointsApi } from "../../utils/endpoints";
import { FetchUserParams } from "../interfaces/fetch-user-params";


interface FetchUserResponse{
    user: User;
}

const fetchUserById = async({id}:FetchUserParams) => {
    const response = await api.get<FetchUserResponse>(`${endpointsApi.user}/${id}`);
    return response.data
}

export {fetchUserById};