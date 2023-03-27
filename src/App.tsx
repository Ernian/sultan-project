import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useAppDispatch } from './hooks/rtkHooks'
import { changeScreenWidth } from './store/screenWidthSlice'
import Layout from './components/layout'
import MainPage from './pages/main'
import CatalogPage from './pages/catalog'
import CartPage from './pages/cart'
import ProductPage from './pages/product'


function App() {
  const dispatch = useAppDispatch()

  const debounce = (fn: Function, ms = 250) => {
    let timeoutId: ReturnType<typeof setTimeout>
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => fn.apply(this, args), ms)
    }
  }

  window.addEventListener(
    "resize",
    debounce(() => {
      dispatch(changeScreenWidth(document.documentElement.clientWidth))
    })
  )

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='product/:id' element={<ProductPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
