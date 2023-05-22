import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
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
import { useSelector } from 'react-redux'

function App() {
  const { authUser } = useSelector((state) => state.users)
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
              path: ':id/edit',
              element: authUser ? (
                <AddQuestionPage />
              ) : (
                <Navigate to='/login' />
              ),
            },
            {
              path: 'add',
              element: authUser ? (
                <AddQuestionPage />
              ) : (
                <Navigate to='/login' />
              ),
            },
            {
              path: 'tag/:tag',
              element: <QuestionsList />,
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
      element: authUser ? <Navigate to='/' /> : <LoginPage />,
    },
    {
      path: '/signup',
      element: authUser ? <Navigate to='/' /> : <SignupPage />,
    },
  ])
  return <RouterProvider router={router} />
}

export default App
