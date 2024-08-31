import { useMutation, useQuery, useQueryClient } from "react-query"
import { authSignin } from "../auth.service";
import { AxiosError } from "axios";
import { ErrorObject, useErrorState } from "../../store/user.store";

export function useSignIn() {
    const { setError } = useErrorState()

    const mutate = useMutation({
        mutationFn: authSignin,
        onSuccess: (data: any) => {
            console.log("Response success: \n\n" + JSON.stringify(data))
        },
        onError: (error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            setError(error.response?.data as ErrorObject);
        }
    })

    return mutate;
}