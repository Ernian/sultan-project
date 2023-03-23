import { useAppSelector } from '../../hooks/rtkHooks'
import DesktopHeader from '../desktopHeader'
import MobileHeader from '../mobileHeader'
import './index.scss'

const Header = () => {
  const { width } = useAppSelector(state => state.screenWidth)


  return (
    <header className='header'>
      {width > 1080 ? <DesktopHeader /> : <MobileHeader />}
    </header>
  )
}

export default Header