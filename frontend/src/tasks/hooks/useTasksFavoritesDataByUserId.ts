import { useQuery } from "@tanstack/react-query"
import { FetchTasksParams } from "../interfaces/fetch-tasks-params"
import { fetchTasksFavoritesByUserId } from "../services/fetch-tasks-favorites-by-userId.service"

export function useTasksFavoritesDataByUserId({userId}: FetchTasksParams) {
  const query = useQuery({
    queryFn: () => fetchTasksFavoritesByUserId({userId}),
    queryKey: ["user-tasks-favorites", {userId}],
    refetchOnWindowFocus:true,
  })

  return query
}