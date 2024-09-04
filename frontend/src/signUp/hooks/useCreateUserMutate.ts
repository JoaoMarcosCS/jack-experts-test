import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CreateUserService } from "../services/create-user.service";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { getApiMessageError } from "../../utils/get-api-message-error";


export function useCreateUserMutate(){
    
    const navigate = useNavigate()

    const mutate = useMutation({
        mutationFn: CreateUserService,
        onSuccess:(data: any) => {
            toast.success("Usuário criado com sucesso!");
            navigate("/signin");
        },
        onError:(error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}