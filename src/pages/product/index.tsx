import { useState } from 'react'
import { useParams } from 'react-router-dom'
import AddToCartButton from '../../components/addToCartButton'
import GoToBackButton from '../../components/goToBackButton'
import { ICategories, IProduct } from '../../types'
import { producatImages } from '../../productsImages'
import volume from '../../assets/svg/volume-icon.svg'
import weight from '../../assets/svg/weight-icon.svg'
import shareIcon from '../../assets/svg/share-icon.svg'
import downloadIcon from '../../assets/svg/download-black-icon.svg'

import './index.scss'

const ProductPage = () => {
  const [count, setCount] = useState(1)

  const { id } = useParams()
  const storageProducts = localStorage.getItem('products')
  const products = storageProducts ? JSON.parse(storageProducts) as IProduct[] : null
  const product = products && products.length ?
    products.find(({ barcode }) => barcode === id) :
    null

  const storageCategories = localStorage.getItem('categories')
  const categories = storageCategories ? JSON.parse(storageCategories) as ICategories : null

  if (!product) return (
    <div className='row' style={{ fontSize: 30, padding: '40px 0px' }}>
      <GoToBackButton />
      <h2>Товар не найден</h2>
    </div>
  )

  const incCount = () => setCount(count => count + 1)
  const decCount = () => {
    if (count === 1) return
    setCount(count => count - 1)
  }

  return (
    <div className='product-page-wrapper'>
      <GoToBackButton />
      <div className='product-page row'>

        <div className='product-page__image-container'>
          <img src={producatImages[product.url]} alt={product.title} />
        </div>

        <div>
          <p className='product-page__in-stock'>В наличии</p>
          <p className='product-page__description'>
            <span>{product.title}</span>&nbsp;
            {product.description}
          </p>

          <div className='product-page__measure'>
            <img src={product.typeOfMeasure === 'weight' ? weight : volume}
              alt={product.typeOfMeasure} height='auto' />&nbsp;
            <span>
              {product.valueOfMeasure}
              {product.typeOfMeasure === 'weight' ? 'г' : 'мл'}
            </span>
          </div>

          <div className='product-page__buy-block'>
            <span>{product.price}&#8376;</span>
            <div className='product-page__buttons'>
              <button
                className='product-page__button'
                onClick={decCount}
              >-</button>
              {count}
              <button
                className='product-page__button'
                onClick={incCount}
              >+</button>
            </div>
            <div className='product-page__buy-block__add-to-cart'>
              <AddToCartButton
                product={product}
                count={count}
              />
            </div>
          </div>

          <div className='product-page__share-delivery'>
            <div className='product-page__share-delivery__container'>
              <div className='product-page__share-delivery__add-to-cart'>
                <AddToCartButton
                  product={product}
                  count={count}
                />
              </div>
              <div className='product-page__share-link'>
                <img src={shareIcon} alt="share link" />
              </div>
            </div>
            <div className='product-page__delivery'>
              При покупке от 10 000&nbsp;&#8376; бесплатная доставка по Кокчетаву и области
            </div>
            <div className='product-page__price-list'>
              Прайс-лист&nbsp;
              <img src={downloadIcon} alt="download" />
            </div>
          </div>

          <div className='product-page__info'>
            <p>Производитель:&nbsp;<span>{product.producer}</span></p>
            <p>Бренд:&nbsp;<span>{product.brand}</span></p>
            <p>Штрихкод:&nbsp;<span>{product.barcode}</span></p>
            <p>Категории:&nbsp;
              <span>
                {
                  categories ?
                    product.categories.map(category => categories[category]).join(', ') :
                    'Категория товара не указана'
                }
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductPage