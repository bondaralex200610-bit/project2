import { useQuery } from '@tanstack/react-query'
import { fetchInitialTasks } from '../api/tasks'
import { taskKeys } from './queryKeys'

export const useTasks = () => {
  return useQuery({
    queryKey: taskKeys.all,
    queryFn: fetchInitialTasks,
    staleTime: Infinity,
  })
}
