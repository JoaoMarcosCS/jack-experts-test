import { useTasksFavoritesDataByUserId } from "../tasks/hooks/useTasksFavoritesDataByUserId";
import { useUserStore } from "../store/user.store";
import { SecondaryText, Title } from "../components/Typography/styled";
import CardSkeleton from "../components/Cards/CardSkeleton";
import { CardTask } from "../components/Cards/CardTask";

export const Favorites = () => {
    
    const { user } = useUserStore((state) => state);

    const userId = user?.id!

    const { data, isLoading } = useTasksFavoritesDataByUserId({ userId });
    
    return (
        <div className="w-full pl-2 flex flex-col">
            <div className="flex w-full justify-center items-center flex-col">
                <Title>Favoritos</Title>
                <SecondaryText className="text-amber-400">Veja as suas tarefas marcadas como favoritas</SecondaryText>
            </div>

            <div className="flex w-full justify-center items-center gap-4 flex-wrap">
                {isLoading && (
                <>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                    <CardSkeleton/>
                </>
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