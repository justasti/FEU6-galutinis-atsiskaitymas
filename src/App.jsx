import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'
import QuestionsList from './features/questions/questions-list/questions-list.component'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <MainLayout />
        </>
      ),
      children: [
        {
          path: '/',
          element: <QuestionsList />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
