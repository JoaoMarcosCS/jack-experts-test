import { useQuery } from "@tanstack/react-query"
import { FetchUserParams } from "../interfaces/fetch-user-params"
import { fetchUserById } from "../services/fetch-user-by-id.service"

export function useUserDataById({id}: FetchUserParams) {
  const query = useQuery({
    queryFn: () => fetchUserById({id}),
    queryKey: ["user-data", {id}],
    refetchOnWindowFocus:true,
  })

  return query
}