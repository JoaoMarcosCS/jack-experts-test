import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CreateUserService } from "../services/create-user.service";
import { ErrorObject, useErrorState } from "../../store/user.store";

export function useCreateUserMutate(){
    const { setError } = useErrorState();
    const mutate = useMutation({
        mutationFn: CreateUserService,
        onSuccess:(data: any) => {
            console.log("Response success: \n\n" + JSON.stringify(data))
        },
        onError:(error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            setError(error.response?.data as ErrorObject);
        }
    })

    return mutate;
}