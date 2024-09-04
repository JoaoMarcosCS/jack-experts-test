import { AxiosError } from "axios";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom"
import { toast } from "sonner";
import { getApiMessageError } from "../../utils/get-api-message-error";
import { createTask } from "../services/create-task.service";


export function useCreateTaskMutate(){
    
    const navigate = useNavigate()

    const mutate = useMutation({
        mutationFn: createTask,
        
        onSuccess:(data: any) => {
            toast.success("Tarefa criada com sucesso!");
            navigate("/");
        },
        onError:(error: AxiosError) => {

            toast.error(`${getApiMessageError(error)}`);
        }
    })

    return mutate;
}