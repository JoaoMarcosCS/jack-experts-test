import { CardTask } from "../components/Cards/CardTask";
import { SecondaryText, Title } from "../components/Typography/styled";
import { useUserStore } from "../store/user.store";
import { useTasksDataByUserId } from "./hooks/useTasksDataByUserId";

export const Home = () => {

    const { user } = useUserStore((state) => state);
    const userId = user?.id!

    const { data, isLoading } = useTasksDataByUserId({ userId });
    
    return (
        <div className="w-full pl-2 flex flex-col">
            <div className="flex w-full justify-center items-center flex-col">
                <Title>Olá, {user?.name}</Title>
                <SecondaryText className="text-amber-400">Veja suas tarefas</SecondaryText>
            </div>

            <div className="flex w-full justify-center items-center gap-4 flex-wrap">
                {isLoading && (
                <p>Estamos carregando suas informações</p>
                )}
                { !isLoading && data && (
                    <>
                    {data.tasks.map((task) => (
                        <CardTask key={task.id} task={task}/>
                    ))}
                    </>
                )}
            </div>
        </div>
    )
}