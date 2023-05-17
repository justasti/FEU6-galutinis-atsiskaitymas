import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'
import { QuestionsList, QuestionDetailsPage } from './features'

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
        {
          path: '/questions/:id',
          element: <QuestionDetailsPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
