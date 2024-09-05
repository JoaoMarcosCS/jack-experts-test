import { useState } from "react"
import { useEffect } from "react"
import { useSearchTask } from "./hooks/useSearchTask";
import { useUserStore } from "../store/user.store";
import { CardTask } from "../components/Cards/CardTask";
import { Title } from "../components/Typography/styled";
import { Loader2 } from "lucide-react";

export const Search = () => {
    
    const [searchText, setSearchText] = useState("");

    const userId = useUserStore((state) => state.user?.id)

    const {isLoading, data} = useSearchTask({userId: userId!, search: searchText});
    
    return(
        <div className="w-full pl-2 flex flex-col">
            <div className="flex w-full justify-center items-center flex-col gap-4">
                <Title>Pesquisar tarefa</Title>
                <input type="text" name="" id="" className="bg-gray-50 shadow rounded-lg px-4 py-1" placeholder="Fazer almoço..." value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
            </div>

            <div className="flex w-full justify-center items-center gap-4 flex-wrap pt-4">
                {isLoading && (
                    <><Loader2 className="animate-spin" />Procurando...</>
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