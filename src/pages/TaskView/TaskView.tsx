import {
  Typography,
  Stack,
  Button,
  Alert,
  CircularProgress,
  Box,
  Paper,
  Chip,
} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useNavigate, useParams } from 'react-router-dom'
import { StatusButtons } from '../../components/StatusButtons/StatusButtons'
import { useTask } from '../../hooks/useTask'
import { useUpdateTaskStatus } from '../../hooks/useUpdateTaskStatus'
import { useDeleteTask } from '../../hooks/useDeleteTask'
import { TASK_STATUS_LABELS, TaskStatus } from '../../types/task'

export const TaskView = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const taskId = Number(id)

  const { task, isLoading, isError } = useTask(taskId)
  const { mutate: updateStatus } = useUpdateTaskStatus()
  const { mutate: deleteTask } = useDeleteTask()

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
        <CircularProgress />
      </Box>
    )
  }

  if (isError || !task) {
    return <Alert severity="error">Задача не найдена</Alert>
  }

  const handleChangeStatus = (status: TaskStatus) => {
    updateStatus({ id: task.id, status })
  }

  const handleDelete = () => {
    deleteTask(task.id, {
      onSuccess: () => navigate('/'),
    })
  }

  return (
    <Paper variant="outlined" sx={{ p: 3, maxWidth: 600 }}>
      <Stack spacing={2}>
        <Typography variant="overline" color="text.secondary">
          Задача №{task.id}
        </Typography>
        <Typography variant="h5">{task.title}</Typography>
        <Typography variant="body1" color="text.secondary">
          {task.description || 'Описание отсутствует'}
        </Typography>
        <Typography variant="body2">
          Дата создания: {task.createdAt.toLocaleString('ru-RU')}
        </Typography>
        <Box>
          <Chip label={TASK_STATUS_LABELS[task.status]} color="primary" />
        </Box>
        <StatusButtons currentStatus={task.status} onChangeStatus={handleChangeStatus} />
        <Button
          color="error"
          variant="outlined"
          startIcon={<DeleteIcon />}
          onClick={handleDelete}
          sx={{ alignSelf: 'flex-start' }}
        >
          Удалить
        </Button>
      </Stack>
    </Paper>
  )
}
