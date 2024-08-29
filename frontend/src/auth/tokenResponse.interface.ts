import { ErrorResponse } from "@/interfaces/error-response.interface";

export interface TokenResponse {
    accessToken?: string;
    error: ErrorResponse
}