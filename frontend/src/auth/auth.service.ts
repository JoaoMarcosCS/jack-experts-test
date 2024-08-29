import { api } from "../services/axios";
import { endpointsApi } from "../utils/endpoints";
import { BodyRequestAuth } from "./interfaces/body-request-auth.interface";
import { TokenResponse } from "./interfaces/tokenResponse.interface";

const authSignin = async(bodyRequestAuth: BodyRequestAuth) => {
    
    const response = await api.post<TokenResponse>(endpointsApi.signIn, bodyRequestAuth);

    return response.data
}

export {authSignin};