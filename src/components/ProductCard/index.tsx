import { Link } from 'react-router-dom'
import AddToCartButton from '../addToCartButton'
import { IProduct } from '../../types'
import volume from '../../assets/svg/volume-icon.svg'
import weight from '../../assets/svg/weight-icon.svg'
import './index.scss'

const ProductCard = ({
  url,
  title,
  typeOfMeasure,
  valueOfMeasure,
  barcode,
  producer,
  brand,
  description,
  price,
  category }: IProduct) => {

  return (
    <div className='card'>
      <div>
        <Link to={`/product/${barcode}`} className='card__link' >
          <div className='card__image'>
            <img src={url} alt={title} />
            <div className='card__measure-info'>
              <img src={typeOfMeasure === 'weight' ? weight : volume} alt={typeOfMeasure} />&nbsp;
              <span>{valueOfMeasure}  {typeOfMeasure === 'weight' ? 'г' : 'мл'}</span>
            </div>
          </div>
        </Link>
        <p className='card__title-desk'>
          <span>{title}</span>&nbsp;
          {description}
        </p>
        <div className='card__product-info'>
          <p>
            <span>Штрихкод:</span>
            &nbsp;{barcode}
          </p>
          <p>
            <span>Производитель:</span>
            &nbsp;{producer}
          </p>
          <p>
            <span>Бренд:</span>
            &nbsp;{brand}
          </p>
        </div>
      </div>

      <div className='card__price'>
        {price}&#8376;
        <AddToCartButton />
      </div>

    </div>
  )
}

export default ProductCard