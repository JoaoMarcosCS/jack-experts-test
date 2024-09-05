import { useForm } from "react-hook-form";
import { UpdateTaskProps, UpdateTaskSchema } from "../schemas/update-task.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useUpdateTask } from "./useUpdateTask";
import { Task } from "@/interfaces/task.interface";

   
export const useUpdateTaskFormHandler = (task: Task) => {
    
    const { register, formState: { errors }, handleSubmit } = useForm<UpdateTaskProps>({
        resolver: zodResolver(UpdateTaskSchema),
        mode: "all",
        reValidateMode: "onChange",
        defaultValues: task
    })

    const {mutate, isLoading} = useUpdateTask();

    const handleUpdateTask = (data: UpdateTaskProps) => {
        
        mutate({taskId: data.id, body: {description: data.description, title: data.title}})
        
    }

    return {
        register,
        errors,
        handleSubmit,
        mutate,
        isLoading,
        handleUpdateTask
    }
}