import { toast } from "sonner";
import { UpdateTaskResponse, updateTask } from "../services/update-task.service"
import { useMutation } from "react-query"
import { useNavigate } from "react-router-dom";
import { QueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";

export function useUpdateTask() {

    const navigate = useNavigate();
    const queryClient = new QueryClient();
    
    const query = useMutation({
        mutationFn: updateTask,

        onSuccess: (data: UpdateTaskResponse) => {
            queryClient.invalidateQueries({queryKey: ["user-tasks"]});
            toast.success("Tarefa alterada com sucesso");
            navigate("/");
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
            navigate("/")
        }

    })

    return query
}