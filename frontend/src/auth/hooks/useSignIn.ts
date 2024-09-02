import { useMutation, useQuery, useQueryClient } from "react-query"
import { authSignin } from "../auth.service";
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/getApiMessageError";
import { toast } from "sonner";
import { TokenResponse } from "../interfaces/tokenResponse.interface";

export function useSignIn() {

    const mutate = useMutation({
        mutationFn: authSignin,
        onSuccess: (data: TokenResponse) => {
            console.log("Response success: \n\n" + JSON.stringify(data));
        },
        onError: (error: AxiosError) => {
            console.log("Response error\n\n: " + JSON.stringify(error.response?.data))
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}