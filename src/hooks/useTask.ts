import { Task } from '../types/task'
import { useTasks } from './useTasks'

export const useTask = (id: number | undefined) => {
  const { data: tasks, ...rest } = useTasks()

  const task: Task | undefined = tasks?.find((item) => item.id === id)

  return { task, tasks, ...rest }
}
