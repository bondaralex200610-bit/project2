export enum TaskStatus {
  ToDo = 0,
  InProgress = 1,
  Done = 2,
}

export interface Task {
  id: number
  title: string
  description?: string
  createdAt: Date
  status: TaskStatus
}

export interface CreateTaskInput {
  title: string
  description?: string
}

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  [TaskStatus.ToDo]: 'К выполнению',
  [TaskStatus.InProgress]: 'В работе',
  [TaskStatus.Done]: 'Выполнено',
}

export const TASK_STATUS_ORDER: TaskStatus[] = [
  TaskStatus.ToDo,
  TaskStatus.InProgress,
  TaskStatus.Done,
]
