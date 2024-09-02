import { ErrorObject } from "../store/user.store";
import { AxiosError } from "axios";

export const getApiMessageError = (error: AxiosError) => {
    const messageError = error.response?.data as ErrorObject
    return messageError.error;
}