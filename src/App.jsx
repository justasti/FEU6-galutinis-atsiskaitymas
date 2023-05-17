import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'
import { QuestionsList, QuestionPage, LoginPage, SignupPage } from './features'

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
    {
      path: '/login',
      element: <LoginPage />,
    },
    {
      path: '/signup',
      element: <SignupPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
