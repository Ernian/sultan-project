import { Link } from 'react-router-dom'
import cartIcon from '../../assets/svg/cart-icon.svg'
import { useAppSelector } from '../../hooks/rtkHooks'

const CartWidget = ({ widthIcon, heightIcon }:
  { widthIcon: number, heightIcon: number }) => {
  const { totalCount, totalCost } = useAppSelector(state => state.cart)

  return (
    <Link to='cart' className='cart-widget'>
      <img src={cartIcon} alt="cart icon" width={widthIcon} height={heightIcon} />
      {!!totalCount && <div className='cart-widget__counter'>{totalCount}</div>}
      <div className='cart-widget__info'>
        <p className='header_secondary-text'>Корзина</p>
        {!!totalCost && <p className='header_main-text'>{totalCost}&nbsp;&#8376; </p>}
      </div>
    </Link>
  )
}

export default CartWidget