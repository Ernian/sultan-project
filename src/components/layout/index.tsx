import { Outlet } from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import BreadCrumbs from '../breadCrumbs'

const Layout = () => (
  <>
    <Header />
    <BreadCrumbs />
    <main className='main'>
      <Outlet />
    </main>
    <Footer />
  </>
)

export default Layout