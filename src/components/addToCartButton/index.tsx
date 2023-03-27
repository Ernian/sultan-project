import './index.scss'
import icon from '../../assets/svg/add-to-cart-icon.svg'

const AddToCartButton = () => (
  <button className='buy-button'>
    в корзину
    <img src={icon} alt="buy button" />
  </button>
)

export default AddToCartButton