import { AppBar, Toolbar, Typography, Button, Box, Stack } from '@mui/material'
import ViewKanbanIcon from '@mui/icons-material/ViewKanban'
import AddIcon from '@mui/icons-material/Add'
import { Outlet, useNavigate } from 'react-router-dom'

export const Layout = () => {
  const navigate = useNavigate()

  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <ViewKanbanIcon sx={{ mr: 1 }} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Доска задач
          </Typography>
          <Stack direction="row" spacing={1}>
            <Button color="inherit" startIcon={<ViewKanbanIcon />} onClick={() => navigate('/')}>
              Доска
            </Button>
            <Button
              color="inherit"
              startIcon={<AddIcon />}
              onClick={() => navigate('/tasks/new')}
            >
              Создать задачу
            </Button>
          </Stack>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Outlet />
      </Box>
    </Box>
  )
}
