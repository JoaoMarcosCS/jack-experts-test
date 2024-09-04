import { useQuery } from "@tanstack/react-query"
import { SearchRequest, searchTask } from "../services/search-task.service"


export function useSearchTask({search, userId}: SearchRequest) {
  const query = useQuery({
    queryFn: () => searchTask({search, userId}),
    queryKey: ["user-search-task", {search, userId}],
    refetchOnWindowFocus:true,
  })

  return query
}