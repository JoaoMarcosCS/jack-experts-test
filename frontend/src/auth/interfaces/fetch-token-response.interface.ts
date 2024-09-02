import { AxiosError } from "axios";

export interface FetchTokenResponse {
    accessToken?: string;
    error?: AxiosError
}