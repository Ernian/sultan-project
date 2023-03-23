import { Link } from 'react-router-dom'

const NavLinks = () => (
  <nav className='nav'>
    <Link to="#" className='nav__link'>О компании</Link>
    <Link to="#" className='nav__link'>Доставка и оплата</Link>
    <Link to="#" className='nav__link'>Возврат</Link>
    <Link to="#" className='nav__link'>Контакты</Link>
  </nav>
)

export default NavLinks