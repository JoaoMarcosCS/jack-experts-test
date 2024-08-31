import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { SignInUserProps, SignInUserSchema } from "../schemas/signin-user.schema"
import { useSignIn } from "../../auth/hooks/useSignIn"

export const useSignInUserFormHandler = () => {
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<SignInUserProps>({
        resolver: zodResolver(SignInUserSchema),
        mode: "all",
        reValidateMode: "onChange"
    })

    const {mutate, isSuccess, isError} = useSignIn();

    const handleSignInUser = (data: SignInUserProps) => {
        console.log("Data do form\n\n" + JSON.stringify(data) + '\n\n');
        
        mutate(data)
        
    }

    return {
        register,
        errors,
        isSubmitting,
        handleSubmit,
        mutate,
        isSuccess,
        isError,
        handleSignInUser
    }
}