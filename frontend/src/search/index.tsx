import { useState } from "react"
import { useEffect } from "react"
import { useSearchTask } from "./hooks/useSearchTask";

export const Search = () => {
    
    const [searchText, setSearchText] = useState();

    const {} = useSearchTask()

    useEffect(() => {
        
    }, searchText)

    return(
        <div className="w-full pl-2 flex flex-col">
            <div className="flex w-full justify-center items-center flex-col">
                
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