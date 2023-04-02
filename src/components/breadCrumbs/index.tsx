import { Link, useLocation } from 'react-router-dom'
import { IProduct } from '../../types'
import './index.scss'

const BreadCrumbs = () => {
  const { pathname } = useLocation()
  const splitPath = pathname.split('/').filter(str => str)
  const storage = localStorage.getItem('products')
  const products = storage ? JSON.parse(storage) as IProduct[] : null

  const getBreadCrumbs = (path: string[]) => {

    if (path[0] === 'catalog') {
      return (
        <div className='row bread-crumbs'>
          <Link to='/'>Главная</Link>
          <span>Каталог</span>
        </div>
      )
    }
    if (path[0] === 'cart') {
      return (
        <div className='row bread-crumbs'>
          <Link to='/'>Главная</Link>
          <span>Корзина</span>
        </div>
      )
    }

    if (path[0] === 'product' && products) {
      const product = products.find(({ barcode }) => barcode === path[1])
      return (
        <div className='row bread-crumbs'>
          <Link to='/'>Главная</Link>
          <Link to='/catalog'>Каталог</Link>
          <span>{product?.title ? product.title : 'Ошибка, товар не найден'}</span>
        </div>
      )
    }
    return null
  }

  return getBreadCrumbs(splitPath)
}

export default BreadCrumbs