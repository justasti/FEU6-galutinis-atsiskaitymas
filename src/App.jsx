import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <>
          <p>Hello</p>
        </>
      ),
    },
  ])
  return <RouterProvider router={router} />
}

export default App
