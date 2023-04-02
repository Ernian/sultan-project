import { Link } from 'react-router-dom'
import { producatsImages } from '../../productsImages'
import weight from '../../assets/svg/weight-icon.svg'
import volume from '../../assets/svg/volume-icon.svg'
import deleteIcon from '../../assets/svg/delete-icon.svg'
import { IProductInCart } from '../../types'
import {
  actionDecProductCount,
  actionIncProductCount,
  actionDeleteProductFromCart,
} from '../../store/cartSlice'
import { useAppDispatch } from '../../hooks/rtkHooks'

const CartItem = ({ product }: { product: IProductInCart }) => {
  const dispatch = useAppDispatch()
  const incCount = () => dispatch(actionIncProductCount(product.barcode))
  const decCount = () => dispatch(actionDecProductCount(product.barcode))
  const deleteProduct = () => dispatch(actionDeleteProductFromCart(product.barcode))

  return (
    <div className='cart-item'>
      <div className='cart-item__info'>
        <div className='cart-item__image-wrapper' >
          <Link to={`/product/${product.barcode}`}>
            <img src={producatsImages[product.url]} alt={product.title} />
          </Link>
        </div>
        <div>

          <div className='product-page__measure'>
            <img src={product.typeOfMeasure === 'weight' ? weight : volume}
              alt={product.typeOfMeasure} height='auto' />&nbsp;
            <span>
              {product.valueOfMeasure}
              {product.typeOfMeasure === 'weight' ? 'г' : 'мл'}
            </span>
          </div>

          <h2>{product.title}</h2>
          <p>{product.description}</p>

        </div>
      </div>

      <div className='cart-item__buy-block'>
        <div className='product-page__buttons'>
          <button
            className='product-page__button'
            onClick={decCount}
          >-</button>
          {product.count}
          <button
            className='product-page__button'
            onClick={incCount}
          >+</button>
        </div>
        <span>{product.price * product.count}&#8376;</span>
        <img
          src={deleteIcon}
          alt="delete"
          onClick={deleteProduct}
        />
      </div>
    </div>
  )
}

export default CartItem

