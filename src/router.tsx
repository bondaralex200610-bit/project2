import { createBrowserRouter } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { TaskBoard } from './pages/TaskBoard/TaskBoard'
import { TaskCreate } from './pages/TaskCreate/TaskCreate'
import { TaskView } from './pages/TaskView/TaskView'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <TaskBoard /> },
      { path: 'tasks/new', element: <TaskCreate /> },
      { path: 'tasks/:id', element: <TaskView /> },
    ],
  },
])
