import { Outlet } from 'react-router-dom'
import { Footer, Header, SideNav } from '../../features'
const MainLayout = () => {
  return (
    <>
      <Header>Header</Header>
      <main>
        <SideNav>SideNav</SideNav>
        <section>
          <Outlet />
        </section>
      </main>
      <Footer>Footer</Footer>
    </>
  )
}
export default MainLayout
