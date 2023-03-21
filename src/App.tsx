import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/layout'
import MainPage from './pages/main'
import CatalogPage from './pages/catalog'
import CartPage from './pages/cart'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='catalog' element={<CatalogPage />} />
          <Route path='cart' element={<CartPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
