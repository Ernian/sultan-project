import { useState } from 'react'
import CartItem from '../../components/cartItem'
import GoToBackButton from '../../components/goToBackButton'
import { useAppDispatch, useAppSelector } from '../../hooks/rtkHooks'
import { actionClearCart } from '../../store/cartSlice'
import './index.scss'

const CartPage = () => {
  const [confirm, setConfirm] = useState(false)
  const dispatch = useAppDispatch()
  const { products } = useAppSelector(state => state.cart)
  const cartProducts = Object.values(products)
  const totalSum = cartProducts.reduce((total, { price, count }) => total + price * count, 0)

  const confirmHandler = () => {
    setConfirm(confirm => !confirm)
    dispatch(actionClearCart())
  }
  return (
    <div className='cart row'>
      <GoToBackButton />
      <h1>Корзина</h1>
      {
        !!cartProducts.length &&
        cartProducts.map(product => <CartItem product={product} />)
      }
      {
        !!cartProducts.length &&
        <div className='order'>
          <button
            className='order__confirm'
            onClick={confirmHandler}
          >
            Оформить заказ
          </button>
          <span>{totalSum}&#8376;</span>
        </div>
      }
      {
        !cartProducts.length && <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 30,
            height: 200,
          }}
        >
          {confirm ? 'Спасибо за покупку!' : 'Нет товаров в корзине'}
        </div>
      }
    </div>
  )
}

export default CartPage