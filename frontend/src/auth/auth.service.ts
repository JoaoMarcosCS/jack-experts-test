import { api } from "../services/axios";
import { endpointsApi } from "../utils/endpoints";
import { BodyRequestAuth } from "./interfaces/body-request-auth.interface";
import { FetchTokenResponse } from "./interfaces/fetch-token-response.interface";

const authSignin = async(bodyRequestAuth: BodyRequestAuth) => {
    
    const response = await api.post<FetchTokenResponse>(endpointsApi.signIn, bodyRequestAuth);

    return response.data
}

export {authSignin};