import { Paper, Typography, Stack } from '@mui/material'
import { Task, TaskStatus, TASK_STATUS_LABELS } from '../../types/task'
import { TaskCard } from '../TaskCard/TaskCard'

interface TaskColumnProps {
  status: TaskStatus
  tasks: Task[]
}

export const TaskColumn = ({ status, tasks }: TaskColumnProps) => {
  return (
    <Paper variant="outlined" sx={{ p: 2, flex: 1, minHeight: 400, bgcolor: 'grey.50' }}>
      <Typography variant="h6" gutterBottom>
        {TASK_STATUS_LABELS[status]}
      </Typography>
      <Stack spacing={1.5}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
        {tasks.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            Нет задач
          </Typography>
        )}
      </Stack>
    </Paper>
  )
}
