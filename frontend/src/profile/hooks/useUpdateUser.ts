import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import { UpdateUserResponse, updateUser } from "../services/update-user.service";
import { useLogout } from "../../auth/hooks/useLogout";

export function useUpdateUser() {

    const queryClient = new QueryClient();
    const { handleLogout } = useLogout()

    const mutate = useMutation({
        mutationFn: updateUser,

        onSuccess: (data: UpdateUserResponse) => {
            queryClient.invalidateQueries();
            toast.success("Informações alteradas com sucesso");
            handleLogout();
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}
