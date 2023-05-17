import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'
import { QuestionsList, QuestionPage } from './features'

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
          element: <QuestionPage />,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
