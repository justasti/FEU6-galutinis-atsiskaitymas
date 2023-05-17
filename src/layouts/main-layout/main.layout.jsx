import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
      <header>Header</header>
      <main>
        <aside>SideNav</aside>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}
export default MainLayout
