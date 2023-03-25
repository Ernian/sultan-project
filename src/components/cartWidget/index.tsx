import { Link } from 'react-router-dom'
import cartIcon from '../../assets/svg/cart-icon.svg'
import { useAppSelector } from '../../hooks/rtkHooks'

const CartWidget = ({ widthIcon, heightIcon }:
  { widthIcon: number, heightIcon: number }) => {
  const { width } = useAppSelector(state => state.screenWidth)

  return (
    <Link to='cart' className='cart-widget'>
      <img src={cartIcon} alt="cart icon" width={widthIcon} height={heightIcon} />
      <div className='cart-widget__counter'>3</div>
      <div className='cart-widget__info'>
        <p className='header_secondary-text'>Корзина</p>
        <p className='header_main-text'>12 478 &#8376; </p>
      </div>
    </Link>
  )
}

export default CartWidget