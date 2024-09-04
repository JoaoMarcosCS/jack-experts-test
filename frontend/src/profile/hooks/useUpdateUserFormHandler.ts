import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useUserStore } from "../../store/user.store";
import { UpdateUserProps, UpdateUserSchema } from "../schemas/update-user.schema";
import { useUpdateUser } from "./useUpdateUser";
import { User } from "../../interfaces/user.interface";

export const useUpdateUserFormHandler = (user: User) => {

    const { register, formState: { errors }, handleSubmit } = useForm<UpdateUserProps>({
        resolver: zodResolver(UpdateUserSchema),
        mode: "all",
        reValidateMode: "onChange",
        defaultValues: user
    })

    const { mutate, isLoading: isUpdatingUserData } = useUpdateUser();

    const handleUpdateUser = (body: UpdateUserProps) => {
        mutate({id: user.id, body});
    }

    return {
        register,
        errors,
        handleSubmit,
        handleUpdateUser,
        isUpdatingUserData
    }
}