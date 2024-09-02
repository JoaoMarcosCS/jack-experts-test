import { useMutation, useQuery, useQueryClient } from "react-query"
import { authSignin } from "../auth.service";
import { AxiosError } from "axios";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { toast } from "sonner";
import { FetchTokenResponse } from "../interfaces/fetch-token-response.interface";
import { useUserStore } from "../../store/user.store";
import { jwtDecode } from "jwt-decode";
import { TokenPayload } from "../interfaces/token-payload.interface";
import { addTokenToHeader } from "../../utils/add-token-to-header";
import { useNavigate } from "react-router-dom";

export function useSignIn() {

    const { updateUser } = useUserStore();
    const navigate = useNavigate()

    const mutate = useMutation({
        mutationFn: authSignin,

        onSuccess: (data: FetchTokenResponse) => {

            const decodedToken = jwtDecode<TokenPayload>(data.accessToken!);
            const { name, email, id } = decodedToken;

            updateUser({
                accessToken: data.accessToken,
                email: email,
                name: name,
                id: id
            })

            addTokenToHeader(data.accessToken!);

            toast.info(`Bem-vindo ${name}`);

            navigate("/");

        },
        onError: (error: AxiosError) => {
            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}