import { Stack, TextField, Button } from '@mui/material'
import { useState, FormEvent } from 'react'
import { CreateTaskInput } from '../../types/task'

interface TaskFormProps {
  onSubmit: (input: CreateTaskInput) => void
  isSubmitting?: boolean
}

export const TaskForm = ({ onSubmit, isSubmitting }: TaskFormProps) => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!title.trim()) return
    onSubmit({ title: title.trim(), description: description.trim() })
  }

  return (
    <Stack component="form" spacing={2.5} onSubmit={handleSubmit} sx={{ maxWidth: 480 }}>
      <TextField
        label="Название"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
        required
        fullWidth
      />
      <TextField
        label="Описание"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        multiline
        minRows={3}
        fullWidth
      />
      <Button type="submit" variant="contained" disabled={isSubmitting || !title.trim()}>
        Создать
      </Button>
    </Stack>
  )
}
