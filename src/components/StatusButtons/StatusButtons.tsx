import { Stack, Button } from '@mui/material'
import { TaskStatus, TASK_STATUS_LABELS, TASK_STATUS_ORDER } from '../../types/task'

interface StatusButtonsProps {
  currentStatus: TaskStatus
  onChangeStatus: (status: TaskStatus) => void
}

export const StatusButtons = ({ currentStatus, onChangeStatus }: StatusButtonsProps) => {
  const otherStatuses = TASK_STATUS_ORDER.filter((status) => status !== currentStatus)

  return (
    <Stack direction="row" spacing={1.5}>
      {otherStatuses.map((status) => (
        <Button key={status} variant="outlined" onClick={() => onChangeStatus(status)}>
          Перевести в «{TASK_STATUS_LABELS[status]}»
        </Button>
      ))}
    </Stack>
  )
}
