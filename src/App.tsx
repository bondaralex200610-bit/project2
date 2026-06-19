import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider } from 'react-router-dom'
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material'
import { router } from './router'

const queryClient = new QueryClient()

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#3f51b5' },
  },
})

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  )
}
