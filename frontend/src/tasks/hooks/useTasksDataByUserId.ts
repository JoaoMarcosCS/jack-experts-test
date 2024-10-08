import { useQuery } from "@tanstack/react-query"
import { FetchTasksParams } from "../interfaces/fetch-tasks-params"
import { fetchTasksByUserId } from "../services/fetch-tasks-by-userId.service"

export function useTasksDataByUserId({userId}: FetchTasksParams) {
  const query = useQuery({
    queryFn: () => fetchTasksByUserId({userId}),
    queryKey: ["user-tasks", {userId}],
    refetchOnWindowFocus:true,
  })

  return query
}