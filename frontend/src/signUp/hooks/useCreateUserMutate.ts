import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CreateUserService } from "../services/create-user.service";
import { ErrorObject, useErrorState } from "../../store/user.store";
import { useNavigate } from "react-router-dom"


export function useCreateUserMutate(){
    
    const { setError } = useErrorState();
    const navigate = useNavigate()

    const mutate = useMutation({
        mutationFn: CreateUserService,
        onSuccess:(data: any) => {
            console.log("Response success: \n\n" + JSON.stringify(data));
            navigate("/signup");
        },
        onError:(error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            setError(error.response?.data as ErrorObject);
        }
    })

    return mutate;
}