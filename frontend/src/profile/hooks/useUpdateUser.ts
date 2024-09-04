import { useMutation } from "react-query"
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { QueryClient } from "@tanstack/react-query";
import { UpdateUserResponse, updateUser } from "../services/update-user.service";
import { useNavigate } from "react-router-dom";

export function useUpdateUser() {

    const queryClient = new QueryClient();
    const navigate = useNavigate();

    const mutate = useMutation({
        mutationFn: updateUser,

        onSuccess: (data: UpdateUserResponse) => {
            queryClient.invalidateQueries();
            toast.success("Informações alteradas com sucesso");
            navigate("/");
        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}
