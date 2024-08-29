import { api } from "../services/axios";
import { BodyRequestAuth } from "./body-request-auth.interface";
import { endpointsApi } from "../utils/endpoints";
import { TokenResponse } from "./tokenResponse.interface";

const authenticationService = async(bodyRequestAuth: BodyRequestAuth) => {
    
    const response = await api.post<TokenResponse>(endpointsApi.signIn, bodyRequestAuth);

    console.log("BRUTO: " + response.data);

    console.log("\n\n\nSTRINGFY" + JSON.stringify(response.data));
}

export {authenticationService};