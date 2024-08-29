import { ErrorResponse } from "@/interfaces/error-response.interface";
import { AxiosError } from "axios";

export interface TokenResponse {
    accessToken?: string;
    error?: AxiosError
}