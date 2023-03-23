import { Link } from 'react-router-dom'
import cartIcon from '../../assets/svg/cart-icon.svg'

const CartWidget = () => {

  return (
    <Link to='cart' className='cart-widget'>
      <img src={cartIcon} alt="cart icon" />
      <div>
        <p className='header_secondary-text'>Корзина</p>
        <p className='header_main-text'>12 478 &#8376; </p>
      </div>
    </Link>
  )
}

export default CartWidget