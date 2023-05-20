import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'
import {
  QuestionsList,
  QuestionPage,
  LoginPage,
  SignupPage,
  UserProfilePage,
  AddQuestionPage,
} from './features'

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
          path: '/questions/',
          children: [
            {
              path: ':id',
              element: <QuestionPage />,
            },
            {
              path: 'add',
              element: <AddQuestionPage />,
            },
          ],
        },
        {
          path: '/user/:id',
          element: <UserProfilePage />,
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
