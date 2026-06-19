import { Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { Task } from '../../types/task'

interface TaskCardProps {
  task: Task
}

export const TaskCard = ({ task }: TaskCardProps) => {
  const navigate = useNavigate()

  return (
    <Card
      variant="outlined"
      sx={{ cursor: 'pointer', '&:hover': { boxShadow: 3 } }}
      onClick={() => navigate(`/tasks/${task.id}`)}
    >
      <CardContent>
        <Typography variant="caption" color="text.secondary">
          №{task.id}
        </Typography>
        <Typography variant="body1">{task.title}</Typography>
      </CardContent>
    </Card>
  )
}
