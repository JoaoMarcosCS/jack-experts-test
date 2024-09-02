import { useUserStore } from "@/store/user.store";
import { api } from "../../services/axios";
import { endpointsApi } from "../../utils/endpoints";

const fetchTasksByUserId = async() => {
    const userId = useUserStore((state) => state.user?.id)

    const response = await api.get(`${endpointsApi.task}/${userId}`);

    console.log(`BRUTO: ${JSON.stringify(response)}`)
    console.log(`DATA: ${JSON.stringify(response.data)}`)
    return response.data
}

export {fetchTasksByUserId};