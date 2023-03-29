import { Link } from 'react-router-dom'
import AddToCartButton from '../addToCartButton'
import { IProduct } from '../../types'
import volume from '../../assets/svg/volume-icon.svg'
import weight from '../../assets/svg/weight-icon.svg'
import './index.scss'
import { categories } from './../../data.json'

import product1 from './../../assets/img/products/product1.png'
import product2 from './../../assets/img/products/product2.png'
import product3 from './../../assets/img/products/product3.png'
import product4 from './../../assets/img/products/product4.png'
import product5 from './../../assets/img/products/product5.png'

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
  const images = { product1, product2, product3, product4, product5 }
  const key = url as keyof typeof images

  return (
    <div className='card'>
      <div>
        <Link to={`/product/${barcode}`} className='card__link' >
          <div className='card__image'>
            <img src={images[key]} alt={title} />
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
          <p>
            <span>Категории:</span>&nbsp;
            {category.map(category => categories[category]).join(', ')}
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