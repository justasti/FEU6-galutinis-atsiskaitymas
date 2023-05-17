import { Outlet } from 'react-router-dom'
import { Header } from '../../features'
const MainLayout = () => {
  return (
    <>
      <Header>Header</Header>
      <main>
        <aside>SideNav</aside>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </>
  )
}
export default MainLayout
