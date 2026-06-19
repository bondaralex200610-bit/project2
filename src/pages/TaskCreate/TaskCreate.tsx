import { Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { TaskForm } from '../../components/TaskForm/TaskForm'
import { useCreateTask } from '../../hooks/useCreateTask'
import { CreateTaskInput } from '../../types/task'

export const TaskCreate = () => {
  const navigate = useNavigate()
  const { mutate, isPending } = useCreateTask()

  const handleSubmit = (input: CreateTaskInput) => {
    mutate(input, {
      onSuccess: (task) => navigate(`/tasks/${task.id}`),
    })
  }

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Создание задачи
      </Typography>
      <TaskForm onSubmit={handleSubmit} isSubmitting={isPending} />
    </>
  )
}
