import { useQuery } from "@tanstack/react-query"
import { fetchTasksByUserId } from "../services/fetch-tasks-by-userId.service"
import { FetchTasksParams } from "../interfaces/fetch-tasks-params"


export function useTasksDataByUserId({userId} : FetchTasksParams) {
  const query = useQuery({
    queryFn: fetchTasksByUserId,
    queryKey: ["user-tasks"],
    refetchOnWindowFocus:true,
    enabled: !!userId
  })

  return query
}