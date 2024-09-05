import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { useUserStore } from "../../store/user.store";
import { removeTokenFromHeader } from "../../utils/remove-token-from-header";
import { deleteUser } from "../services/delete-user.service";

export function useDeleteUser() {

    const navigate = useNavigate();
    const removeUser = useUserStore((state) => state.removeUser);
    
    const mutate = useMutation({
        mutationFn: deleteUser,

        onSuccess: () => {
            toast.success("Sua conta foi excluida com sucesso");
            removeUser();
            removeTokenFromHeader();
            navigate("/signin");
        },

        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}
