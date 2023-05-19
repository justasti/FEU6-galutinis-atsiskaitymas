import { Outlet, useLocation } from 'react-router-dom'
import { Footer, Header, SideNav } from '../../features'
import { MainContentContainer } from './main-layout.styles'
import { useEffect } from 'react'
const MainLayout = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <>
      <Header>Header</Header>
      <MainContentContainer>
        <SideNav>SideNav</SideNav>
        <section className='main-section'>
          <Outlet />
        </section>
      </MainContentContainer>
      <Footer>Footer</Footer>
    </>
  )
}
export default MainLayout
