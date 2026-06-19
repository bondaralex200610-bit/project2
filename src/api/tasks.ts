import { apiClient } from './client'
import { Task, TaskStatus } from '../types/task'

interface JsonPlaceholderTodo {
  id: number
  title: string
  completed: boolean
  userId: number
}

const mapTodoToTask = (todo: JsonPlaceholderTodo, index: number): Task => {
  const createdAt = new Date()
  createdAt.setMinutes(createdAt.getMinutes() - index)

  return {
    id: todo.id,
    title: todo.title,
    description: '',
    createdAt,
    status: todo.completed ? TaskStatus.Done : TaskStatus.ToDo,
  }
}

export const fetchInitialTasks = async (): Promise<Task[]> => {
  const { data } = await apiClient.get<JsonPlaceholderTodo[]>('/todos', {
    params: { _limit: 15 },
  })

  return data.map(mapTodoToTask)
}
