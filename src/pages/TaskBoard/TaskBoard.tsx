import { Stack, CircularProgress, Alert, Box } from '@mui/material'
import { TaskColumn } from '../../components/TaskColumn/TaskColumn'
import { useTasks } from '../../hooks/useTasks'
import { TASK_STATUS_ORDER } from '../../types/task'

export const TaskBoard = () => {
  const { data: tasks, isLoading, isError } = useTasks()

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (isError || !tasks) {
    return <Alert severity="error">Не удалось загрузить список задач</Alert>
  }

  return (
    <Stack direction="row" spacing={2}>
      {TASK_STATUS_ORDER.map((status) => (
        <TaskColumn
          key={status}
          status={status}
          tasks={tasks.filter((task) => task.status === status)}
        />
      ))}
    </Stack>
  )
}
