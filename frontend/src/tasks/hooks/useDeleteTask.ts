import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import { DeleteTaskParams, DeleteTaskResponse } from "../services/delete-task.service";
import { deleteTask } from "../services/delete-task.service"

export function useDeleteTask() {

    const queryClient = new QueryClient();

    const mutate = useMutation({
        mutationFn: deleteTask,

        onSuccess: (data: DeleteTaskResponse) => {
            toast.success("Tarefa excluída com sucesso");
            queryClient.invalidateQueries();
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}