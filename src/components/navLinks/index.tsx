import { Link } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { actionLogOut } from '../../store/adminSlice'

const NavLinks = () => {
  const { isAdmin } = useAppSelector(state => state.admin)
  const dispatch = useAppDispatch()
  const logOut = () => dispatch(actionLogOut())
  return (
    <nav className='nav'>
      <Link to="#" className='nav__link'>О компании</Link>
      <Link to="#" className='nav__link'>Доставка и оплата</Link>
      <Link to="#" className='nav__link'>Возврат</Link>
      <Link to="#" className='nav__link'>Контакты</Link>
      {isAdmin && <Link to="admin" className='nav__link'>Admin</Link>}
      {isAdmin && <span className='nav__link' onClick={logOut}>Logout</span>}
    </nav>
  )
}

export default NavLinks