import { useQuery } from "@tanstack/react-query";
import { SearchRequest, searchTask } from "../services/search-task.service";

export function useSearchTask({userId, search}: SearchRequest) {
  const query = useQuery({
    queryFn: () => searchTask({userId, search}),
    queryKey: ["user-tasks", {userId, search}],
    refetchOnWindowFocus:true,
  })

  return query
}