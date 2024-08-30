import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { CreateUserService } from "../services/create-user.service";

export function useCreateUserMutate(){
    const mutate = useMutation({
        mutationFn: CreateUserService,
        onSuccess:(data: any) => {
            
        },
        onError:(error: AxiosError) => {
        }
    })

    return mutate;
}