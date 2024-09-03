import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import { setTaskAsFavorite, SetTaskAsFavoriteResponse} from "../services/set-task-as-favorite.service";

export function useSetTaskAsFavorite() {

    const queryClient = new QueryClient();

    const mutate = useMutation({
        mutationFn: setTaskAsFavorite,

        onSuccess: (data: SetTaskAsFavoriteResponse) => {
            queryClient.invalidateQueries();
            toast.success("Tarefa marcada como favorita");
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}
