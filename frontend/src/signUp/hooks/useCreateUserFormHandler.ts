import { useForm } from "react-hook-form"
import { CreateUserProps, CreateUserSchema } from "../schemas/create-user.schema"
import { zodResolver } from "@hookform/resolvers/zod"
import { useCreateUserMutate } from "./useCreateUserMutate"

export const useCreateUserFormHandlers = () => {
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<CreateUserProps>({
        resolver: zodResolver(CreateUserSchema),
        mode: "all",
        reValidateMode: "onChange"
    })

    const {mutate, isSuccess, isError, isLoading} = useCreateUserMutate();

    const handleCreateUser = (data: CreateUserProps) => {
        console.log("Data do form\n\n" + JSON.stringify(data) + '\n\n');
        
        mutate(data)
        
    }

    return {
        register,
        errors,
        isSubmitting,
        handleSubmit,
        mutate,
        isLoading,
        isSuccess,
        isError,
        handleCreateUser
    }
}