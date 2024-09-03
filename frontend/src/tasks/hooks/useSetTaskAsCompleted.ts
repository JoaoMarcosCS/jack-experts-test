import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { setTaskAsCompleted, SetTaskAsCompletedResponse } from "../services/set-task-as-completed.service";
import { QueryClient } from "@tanstack/react-query";

export function useSetTaskAsCompleted() {

    const queryClient = new QueryClient();

    const mutate = useMutation({
        mutationFn: setTaskAsCompleted,

        onSuccess: (data: SetTaskAsCompletedResponse) => {
            if(data.ok){
                toast.success("Tarefa marcada como concluida");
                queryClient.invalidateQueries();
            }
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}