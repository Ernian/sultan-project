import { useState, ChangeEventHandler } from 'react'
import { useAppSelector } from '../../hooks/rtkHooks'
import FilterCategory from '../../components/filterCategory'
import ProductCard from '../../components/productCard'
import Pagination from '../../components/pagination'
import CatalogSideBar from '../../components/catalogSideBar'
import GoToBackButton from '../../components/goToBackButton'
import {
  IData,
  Producers,
  Brands,
  ICategories,
  IProduct,
  TypesOfMeasure,
  NamesCategories,
  KeysCategories
} from '../../types'
import json from '../../data.json'
import './index.scss'

const {
  producers,
  categories,
  brands,
  typesOfMeasure,
  products: jsonProducts
} = json as IData

const CatalogPage = () => {
  //подготовка массива с названиями категорий
  const allCategories = Object.entries(categories) as [KeysCategories, NamesCategories][]

  const [fieldSort, setFieldSort] = useState<'title' | 'price'>('title')
  const [orderSort, setOrderSort] = useState<'asc' | 'desc'>('asc')

  const selectHandler: ChangeEventHandler<HTMLSelectElement> = event => {
    if (event.target.name === 'fieldSort') {
      setFieldSort(event.target.value as 'title' | 'price')
    }
    if (event.target.name === 'orderSort') {
      setOrderSort(event.target.value as 'asc' | 'desc')
    }
  }

  //подготовка списка товаров с сервера/локального хранилища
  const storage = localStorage.getItem('products')
  const localStorageProducts = storage ? JSON.parse(storage) as IProduct[] : null
  const products = (localStorageProducts && localStorageProducts.length) ?
    localStorageProducts : jsonProducts

  const {
    selectedCategories,
    priceRange,
    selectedProducers,
    selectedBrands
  } = useAppSelector(state => state.filters)

  const getFilteredProducts = (products: IProduct[]) => {
    let result = getFilteredByCategoryProducts(products)
    result = getFilteredByPriceProducts(result)
    result = getFilteredByProducerProducts(result)
    result = getFilteredByBrandProducts(result)

    return result
  }

  const getFilteredByCategoryProducts = (products: IProduct[]) => {
    //если ни один фильтр не включен
    if (!selectedCategories.length) return products

    //возвращаем товар если он соответствует хотя бы одной выбранной категории
    return products.filter(({ categories }) => (
      categories.some(category => selectedCategories.includes(category))
    ))
  }

  const getFilteredByPriceProducts = (products: IProduct[]) => (
    products.filter(({ price }) => price > priceRange.min && price < priceRange.max)
  )

  const getFilteredByProducerProducts = (products: IProduct[]) => {
    if (!selectedProducers.length) return products

    return products.filter(({ producer }) => selectedProducers.includes(producer))
  }

  const getFilteredByBrandProducts = (products: IProduct[]) => {
    if (!selectedBrands.length) return products

    return products.filter(({ brand }) => selectedBrands.includes(brand))
  }

  //работа с пагинацией
  const [currentPage, setCurrentPage] = useState<number>(1)
  const productsPerPage = 6
  const totalPages = Math.ceil(getFilteredProducts(products).length / productsPerPage)
  const lastIndexProduct = currentPage * productsPerPage
  const firstIndexProduct = lastIndexProduct - productsPerPage

  const renderProducts = (products: IProduct[]) => {
    if (!totalPages) {
      return (
        <h3 style={{
          fontSize: 40,
          fontWeight: 500,
          color: '#111',
          margin: '40px 0'
        }}>
          Нет подходящих товаров
        </h3>
      )
    }

    const sortFilteredProducts = orderSort === 'asc' ?
      getFilteredProducts(products).sort((prev, next) => {
        return prev[fieldSort] > next[fieldSort] ? 1 : -1
      }) :
      getFilteredProducts(products).sort((prev, next) => {
        return prev[fieldSort] > next[fieldSort] ? -1 : 1
      })

    return sortFilteredProducts
      .slice(firstIndexProduct, lastIndexProduct)
      .map(product => <ProductCard {...product} key={product.barcode} />)
  }

  return (
    <div className='catalog row'>
      <GoToBackButton />
      <div className='catalog__header'>
        <h1>Косметика и гигиена</h1>
        <div className='catalog__sort-block_desk'>
          <label htmlFor='fieldSort' >Сортировка:
            <select name='fieldSort' onChange={selectHandler}>
              <option value='title'>Название</option>
              <option value='price'>Цена</option>
            </select>
          </label>
          <label htmlFor='orderSort' style={{ marginLeft: 20 }}>Порядок:
            <select name='orderSort' onChange={selectHandler}>
              <option value='asc'>По возростанию</option>
              <option value='desc'>По убыванию</option>
            </select>
          </label>
        </div>
      </div>

      <div className='catalog__filter'>
        {
          allCategories.map(([keyCategory, nameCategory]) => (
            <FilterCategory
              category={nameCategory}
              keyCategory={keyCategory}
              key={keyCategory}
              setCurrentPage={setCurrentPage}
              className='catalog__filter_top'
            />
          ))
        }
      </div>

      <div className='catalog__wrapper'>
        <CatalogSideBar
          producers={producers}
          brands={brands}
          setCurrentPage={setCurrentPage}
          allCategories={allCategories}
          products={jsonProducts}
          selectHandler={selectHandler}
        />
        <div className='catalog__container'>
          <div className='catalog__products-cards'>
            {renderProducts(products)}
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
    </div>
  )

}

export default CatalogPage