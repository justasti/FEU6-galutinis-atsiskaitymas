import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'
import MainLayout from './layouts/main-layout/main.layout'

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
          element: <>This goes in Outlet</>,
        },
      ],
    },
  ])
  return <RouterProvider router={router} />
}

export default App
