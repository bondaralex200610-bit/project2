import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task } from '../types/task'
import { taskKeys } from './queryKeys'

export const useDeleteTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => id,
    onSuccess: (id) => {
      queryClient.setQueryData<Task[]>(taskKeys.all, (current = []) =>
        current.filter((task) => task.id !== id),
      )
    },
  })
}
