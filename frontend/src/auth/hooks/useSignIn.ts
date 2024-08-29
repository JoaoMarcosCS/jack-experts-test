import {useMutation, useQuery, useQueryClient} from "react-query"
import { authSignin } from "../auth.service";
import { toast } from "sonner";

export function useSignIn(){
    const mutate = useMutation({
        mutationFn: authSignin,
        onSuccess:(data: any) => {
            toast.success(data);
            console.log("Data: " + JSON.stringify(data))
        },
        onError:(error: any) => {
            console.log("error: " + JSON.stringify(error))
            toast.error(error);
        }
    })

    return mutate;
}