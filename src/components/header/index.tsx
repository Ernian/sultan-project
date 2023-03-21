import { Link } from 'react-router-dom'
import { useAppSelector } from '../../hooks/rtkHooks'
import DesctopHeader from '../desktopHeader'
import MobileHeader from '../mobileHeader'

const Header = () => {
  const { width } = useAppSelector(state => state.screenWidth)


  return (
    <header>
      {width > 1200 ? <DesctopHeader /> : <MobileHeader />}
    </header>
  )
}

export default Header