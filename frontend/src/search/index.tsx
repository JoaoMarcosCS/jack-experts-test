import { useState } from "react"
import { useEffect } from "react"
import { useSearchTask } from "./hooks/useSearchTask";
import { useUserStore } from "../store/user.store";
import { CardTask } from "../components/Cards/CardTask";

export const Search = () => {
    
    const [searchText, setSearchText] = useState("");

    const userId = useUserStore((state) => state.user?.id)

    const {isLoading, data} = useSearchTask({userId: userId!, search: searchText});

    useEffect(() => {
        
    }, [searchText])

    return(
        <div className="w-full pl-2 flex flex-col">
            <div className="flex w-full justify-center items-center flex-col">
                <p>Pesquisar tarefa</p>
                <input type="text" name="" id="" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>

            <div className="flex w-full justify-center items-center gap-4 flex-wrap">
                {isLoading && (
                    <p>Carregando...</p>
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