import { Link } from 'react-router-dom'
import cartIcon from '../../assets/svg/cart-icon.svg'
import { useAppSelector } from '../../hooks/rtkHooks'

const CartWidget = ({ widthIcon, heightIcon }:
  { widthIcon: number, heightIcon: number }) => {
  const { products } = useAppSelector(state => state.cart)
  const cartProducts = Object.values(products)
  const totalCount = cartProducts.reduce((total, { count }) => total + count, 0)
  const totalCost = cartProducts.reduce((total, { price, count }) => total + price * count, 0)

  return (
    <Link to='cart' className='cart-widget'>
      <img src={cartIcon} alt="cart icon" width={widthIcon} height={heightIcon} />
      {
        !!cartProducts.length && <div className='cart-widget__counter'>
          {totalCount}
        </div>
      }
      <div className='cart-widget__info'>
        <p className='header_secondary-text'>Корзина</p>
        {
          !!cartProducts.length && <p className='header_main-text'>
            {totalCost}&nbsp;&#8376;
          </p>
        }
      </div>
    </Link>
  )
}

export default CartWidget