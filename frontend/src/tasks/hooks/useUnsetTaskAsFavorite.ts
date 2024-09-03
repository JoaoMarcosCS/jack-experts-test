import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import { UnsetTaskAsFavoriteResponse, unsetTaskAsFavorite } from "../services/unset-task-as-favorite.service";

export function useUnsetTaskAsFavorite() {

    const queryClient = new QueryClient();

    const mutate = useMutation({
        mutationFn: unsetTaskAsFavorite,

        onSuccess: (data: UnsetTaskAsFavoriteResponse) => {
            if(data.ok){
                toast.success("Tarefa desmarcada como favorita");
                queryClient.invalidateQueries();
            }
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}