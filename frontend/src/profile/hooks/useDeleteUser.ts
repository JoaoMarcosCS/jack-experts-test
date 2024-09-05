import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { deleteUser } from "../services/delete-user.service";
import { useLogout } from "../../auth/hooks/useLogout";

export function useDeleteUser() {

    const { handleLogout } = useLogout();

    const mutate = useMutation({
        mutationFn: deleteUser,

        onSuccess: () => {
            toast.success("Sua conta foi excluida com sucesso");
            handleLogout();
        },

        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}
