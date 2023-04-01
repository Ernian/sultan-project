import { useAppDispatch } from '../../hooks/rtkHooks'
import { actionAddToCart } from '../../store/cartSlice'
import { IProduct } from '../../types'

import './index.scss'
import icon from '../../assets/svg/add-to-cart-icon.svg'

const AddToCartButton = ({ product, count = 1 }:
  { product: IProduct, count: number }) => {
  const dispatch = useAppDispatch()
  const clickHandler = () => dispatch(actionAddToCart({ product, count }))

  return (
    <button
      className='buy-button'
      onClick={clickHandler}
    >
      в корзину
      <img src={icon} alt="buy button" />
    </button>
  )
}

export default AddToCartButton