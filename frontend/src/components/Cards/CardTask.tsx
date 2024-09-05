import { Check, Loader2, Star, Trash } from "lucide-react"
import { Task } from "../../interfaces/task.interface"
import { Button } from "../ui/button"
import { TextMuted } from "../Typography/styled"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useSetTaskAsFavorite } from "../../tasks/hooks/useSetTaskAsFavorite"
import { useUnsetTaskAsFavorite } from "../../tasks/hooks/useUnsetTaskAsFavorite"
import { useSetTaskAsCompleted } from "../../tasks/hooks/useSetTaskAsCompleted"
import { useEffect, useState } from "react"
import { useDeleteTask } from "../../tasks/hooks/useDeleteTask"
import { CardUpdateTask } from "./CardUpdateTask"

interface CardTaskProps {
    task: Task
}

export const CardTask = ({ task }: CardTaskProps) => {

    const { mutate: setTaskAsFavorite, isLoading: isSettingTaskAsFavorite } = useSetTaskAsFavorite();

    const { mutate: unsetTaskAsFavortie, isLoading: isUnsettingTaskAsFavorite } = useUnsetTaskAsFavorite();

    const { mutate: setTaskAsCompleted, isLoading: isSettingTaskAsCompleted } = useSetTaskAsCompleted();

    const {mutate: deleteTask, isLoading: isDeletingTask} = useDeleteTask()

    //estados para manipular visualmente apenas, pois o react query não está invaldiando as querys
    //e atualizando o cache e consequentemente atualizando o estado dos componentes
    const [favorite, setFavorite] = useState(task.isFavorite);
    const [deleted, setDeleted] = useState(false);

    return (
        <div key={task.id} className={`w-[340px] rounded shadow border border-amber-200
         py-3 px-4 transition-all hover:bg-slate-50 ${deleted ? 'hidden' : ''}`}>

            <div className="w-full flex justify-between">
                <div>
                    <Button variant={"outline"} className="border-none" onClick={() => {
                        deleteTask({taskId: task.id});
                        setDeleted(true);
                    }}>
                        {isDeletingTask ? (
                            <Loader2 className="animate-spin text-red-400" />
                        ) : (
                            <Trash className="text-red-400" />
                        )}
                    </Button>
                    <h1 className="text-xl font-bold">{task.title}</h1>
                    <p className="text-sm font-semibold 
                    ">Criado em {format(task.createdAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
                </div>

                {favorite ? (
                    <Button variant={"outline"} className="border-none" onClick={() => {
                        unsetTaskAsFavortie({ taskId: task.id });
                        setFavorite(false);
                    }}>
                        {isUnsettingTaskAsFavorite ? (
                            <Loader2 className="animate-spin text-amber-400" />
                        ) : (
                            <Star className="text-amber-400" />
                        )}

                    </Button>
                ) : (
                    <Button variant={"outline"} className="border-none" onClick={() => {
                        setTaskAsFavorite({ taskId: task.id });
                        setFavorite(true);
                    }}>
                        {isSettingTaskAsFavorite ? (
                            <Loader2 className="animate-spin text-amber-400" />
                        ) : (
                            <Star className="text-gray-900" />
                        )}
                    </Button>
                )}

            </div>

            <div className="flex flex-col items-start w-full mt-4">
                <TextMuted className="italic text-sm">Descrição</TextMuted>
                <p className="text-base">{task.description}</p>
            </div>

            <div className="w-full flex justify-between mt-4">
                <CardUpdateTask task={task}/>
                {task.status === 'open'  ? (
                    <Button variant={"outline"} className="border-none gap-1" onClick={() => {
                        setTaskAsCompleted({ taskId: task.id });
                        task.status = "completed";
                    }}>
                        {isSettingTaskAsCompleted ? (
                            <Loader2 className="animate-spin text-amber-400" />
                        ) : (
                            <>Marcar como concluída <Check /></>
                        )}

                    </Button>
                ) : (
                    <p className="text-sm font-semibold text-emerald-600 bg-emerald-300 rounded-2xl py-1 px-2">
                        Tarefa concluída
                    </p>
                )}

            </div>

        </div>
    )
}