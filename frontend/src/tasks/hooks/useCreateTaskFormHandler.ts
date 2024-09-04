import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { CreateTaskProps, CreateTaskSchema } from "../schemas/create-task.schema";
import { useCreateTaskMutate } from "./useCreateTask";
import { useUserStore } from "../../store/user.store";
import {toast} from "sonner";

export const useCreateTaskFormHandler = () => {
    
    const { register, formState: { errors, isSubmitting }, handleSubmit } = useForm<CreateTaskProps>({
        resolver: zodResolver(CreateTaskSchema),
        mode: "all",
        reValidateMode: "onChange"
    })

    const userId = useUserStore((state) => state.user?.id);

    const {mutate, isSuccess, isError, isLoading} = useCreateTaskMutate();

    const handleCreateTask = (data: CreateTaskProps) => {
        
        mutate({title: data.title, description: data.description, userId: userId!})
        
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
        handleCreateTask
    }
}