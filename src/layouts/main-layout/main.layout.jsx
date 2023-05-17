import { Outlet } from 'react-router-dom'
import { Footer, Header } from '../../features'
const MainLayout = () => {
  return (
    <>
      <Header>Header</Header>
      <main>
        <aside>SideNav</aside>
        <Outlet />
      </main>
      <Footer>Footer</Footer>
    </>
  )
}
export default MainLayout
