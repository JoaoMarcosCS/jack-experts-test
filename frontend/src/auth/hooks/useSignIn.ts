import { useMutation, useQuery, useQueryClient } from "react-query"
import { authSignin } from "../auth.service";
import { AxiosError } from "axios";
// import { ErrorObject, useErrorState } from "../../store/user.store";
import { getApiMessageError } from "../../utils/getApiMessageError";
import { toast } from "sonner";

export function useSignIn() {
    // const { setError } = useErrorState()

    const mutate = useMutation({
        mutationFn: authSignin,
        onSuccess: (data: any) => {
            console.log("Response success: \n\n" + JSON.stringify(data))
            toast(JSON.stringify(data));
            // setError({} as ErrorObject);
        },
        onError: (error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            // setError(getApiMessageError(error));
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}