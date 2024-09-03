import { Check, Loader2, Star, Trash } from "lucide-react"
import { Task } from "../../interfaces/task.interface"
import { Button } from "../ui/button"
import { TextMuted } from "../Typography/styled"
import { format } from "date-fns"
import { ptBR } from "date-fns/locale"
import { useSetTaskAsFavorite } from "../../tasks/hooks/useSetTaskAsFavorite"
import { SetTaskAsCompletedParams } from "../../tasks/services/set-task-as-completed.service"

interface CardTaskProps {
    task: Task
}

export const CardTask = ({ task }: CardTaskProps) => {

    const { mutate, isLoading } = useSetTaskAsFavorite();

    const handleSetTaskAsFavorite = ({ taskId }: SetTaskAsCompletedParams) => {
        mutate({ taskId })
    }

    return (
        <div key={task.id} className="w-[340px] rounded 
        shadow border border-amber-200 py-3 px-4 transition-all hover:bg-slate-50">

            <div className="w-full flex justify-between">
                <div>
                    <Button variant={"outline"} className="border-none">
                        <Trash color="#c52222" />
                    </Button>
                    <h1 className="text-xl font-bold">{task.title}</h1>
                    <p className="text-sm font-semibold 
                    ">Criado em {format(task.createdAt, "dd 'de' MMMM 'de' yyyy", { locale: ptBR })}</p>
                </div>

                {task.isFavorite ? (
                    <Button variant={"outline"} className="border-none">
                        {isLoading ? (
                            <Loader2 className="animate-spin text-amber-400" />
                        ) : (
                            <Star className="text-amber-400" />
                        )}

                    </Button>
                ) : (
                    <Button variant={"outline"} className="border-none" onClick={() => handleSetTaskAsFavorite({ taskId: task.id })}>
                        {isLoading ? (
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

            <div className="w-full flex justify-end mt-4">
                {task.status === 'open' ? (
                    <Button variant={"outline"} className="border-none">
                        Marcar como concluída <Check />
                    </Button>
                ) : (
                    <p>Tarefa concluída</p>
                )}

            </div>

        </div>
    )
}