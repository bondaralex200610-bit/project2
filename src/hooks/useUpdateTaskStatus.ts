import { useMutation, useQueryClient } from '@tanstack/react-query'
import { Task, TaskStatus } from '../types/task'
import { taskKeys } from './queryKeys'

interface UpdateStatusInput {
  id: number
  status: TaskStatus
}

export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (input: UpdateStatusInput) => input,
    onSuccess: ({ id, status }) => {
      queryClient.setQueryData<Task[]>(taskKeys.all, (current = []) =>
        current.map((task) => (task.id === id ? { ...task, status } : task)),
      )
    },
  })
}
