import {useMutation, useQuery, useQueryClient} from "react-query"
import { authSignin } from "../auth.service";
import { toast } from "sonner";
import { ErrorResponse } from "../../interfaces/error-response.interface";
import { AxiosError } from "axios";

export function useSignIn(){
    const mutate = useMutation({
        mutationFn: authSignin,
        onSuccess:(data: any) => {
            
        },
        onError:(error: AxiosError) => {
        }
    })

    return mutate;
}