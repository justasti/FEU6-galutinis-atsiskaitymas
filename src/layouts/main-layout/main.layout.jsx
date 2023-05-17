import { Outlet } from 'react-router-dom'
import { Footer, Header, SideNav } from '../../features'
import { MainContentContainer } from './main-layout.styles'
const MainLayout = () => {
  return (
    <>
      <Header>Header</Header>
      <MainContentContainer>
        <SideNav>SideNav</SideNav>
        <section>
          <Outlet />
        </section>
      </MainContentContainer>
      <Footer>Footer</Footer>
    </>
  )
}
export default MainLayout
