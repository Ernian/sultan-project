import { useState } from 'react'
import FilterCategory from '../../../components/filterCategory'
import ProductCard from '../../../components/ProductCard'
import Pagination from '../../../components/pagination'
import {
  Producers,
  Brands,
  ICategories,
  IProduct,
  TypesOfMeasure,
  ValueCategories
} from '../../../types'

const DesktopCatalogPage = ({
  producers,
  categories,
  brands,
  typesOfMeasure,
  products: jsonProducts
}: {
  producers: Producers[],
  categories: ICategories,
  brands: Brands[],
  typesOfMeasure: TypesOfMeasure[],
  products: IProduct[]
}) => {
  const allCategories = Object.values(categories) as ValueCategories[]

  const storage = localStorage.getItem('products')
  const localStorageProducts = storage ? JSON.parse(storage) as IProduct[] : null
  const products = (localStorageProducts && localStorageProducts.length) ?
    localStorageProducts : jsonProducts

  const [currentPage, setCurrentPage] = useState<number>(1)
  const productsPerPage = 15
  const totalPages = Math.ceil(products.length / productsPerPage)
  const lastIndexProduct = currentPage * productsPerPage
  const firstIndexProduct = lastIndexProduct - productsPerPage

  const renderProducts = (products: IProduct[]) => {
    if (!products.length) return <h3>Нет подходящих товаров</h3>
    return products.slice(firstIndexProduct, lastIndexProduct)
      .map(product => <ProductCard {...product} key={product.barcode} />)
  }

  return (
    <div className='catalog row'>

      <div className='catalog__header'>
        <h1>Косметика и гигиена</h1>
        <div>
          <label htmlFor='sortField' >Сортировка:
            <select name='sortField'>
              <option value='title'>Название</option>
              <option value='price'>Цена</option>
            </select>
          </label>
          <label htmlFor='orderSort' style={{ marginLeft: 20 }}>Порядок:
            <select name='orderSort'>
              <option value='title'>По возростанию</option>
              <option value='price'>По убыванию</option>
            </select>
          </label>
        </div>
      </div>

      <div className='catalog__filter'>
        {allCategories.map(category => (
          <FilterCategory
            category={category}
            key={category}
            className='catalog__filter_top'
          />
        ))}
      </div>

      <div className='catalog__wrapper'>
        <aside className='catalog__aside'
          style={{ backgroundColor: '#eee', padding: 10 }}
        >
          <h3>ПОДБОР ПО ПАРАМЕТРАМ</h3>
        </aside>
        <div className='catalog__container'>
          <div className='catalog__products-cards'>
            {renderProducts(products)}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. Nunc elit, dignissim sed nulla ullamcorper enim, malesuada.
          </p>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </div>
      </div>
    </div>
  )
}

export default DesktopCatalogPage