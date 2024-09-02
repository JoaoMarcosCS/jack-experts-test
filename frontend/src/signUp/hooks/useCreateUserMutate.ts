import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CreateUserService } from "../services/create-user.service";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { getApiMessageError } from "../../utils/getApiMessageError";


export function useCreateUserMutate(){
    
    const navigate = useNavigate()

    const mutate = useMutation({
        mutationFn: CreateUserService,
        onSuccess:(data: any) => {
            console.log("Response success: \n\n" + JSON.stringify(data));
            toast.success("Usuário criado com sucesso!");
            navigate("/signin");
        },
        onError:(error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}