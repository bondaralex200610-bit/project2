import { useMutation, useQueryClient } from '@tanstack/react-query'
import { CreateTaskInput, Task, TaskStatus } from '../types/task'
import { taskKeys } from './queryKeys'

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (input: CreateTaskInput): Promise<Task> => {
      const existingTasks = queryClient.getQueryData<Task[]>(taskKeys.all) ?? []
      const maxId = existingTasks.reduce((max, task) => Math.max(max, task.id), 0)

      const newTask: Task = {
        id: maxId + 1,
        title: input.title,
        description: input.description,
        createdAt: new Date(),
        status: TaskStatus.ToDo,
      }

      return newTask
    },
    onSuccess: (newTask) => {
      queryClient.setQueryData<Task[]>(taskKeys.all, (current = []) => [
        ...current,
        newTask,
      ])
    },
  })
}
