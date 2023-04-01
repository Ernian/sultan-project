import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct } from '../types'

interface IProductInCart extends IProduct {
  count: number
}

interface IAddToCartAction {
  product: IProduct
  count: number,
}

interface IInitialState {
  products: {
    [barcode: string]: IProductInCart,
  },
  totalCost: number,
  totalCount: number,
}

const initialState: IInitialState = {
  products: {},
  totalCost: 0,
  totalCount: 0
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionAddToCart(state, { payload: { product, count } }
      : PayloadAction<IAddToCartAction>) {
      if (state.products[product.barcode]) {
        state.products[product.barcode].count += count
        state.totalCost += count * product.price
        state.totalCount += count
      } else {
        state.products[product.barcode] = { ...product, count }
        state.totalCost += count * product.price
        state.totalCount += count
      }
    }
  }
})

export const { actionAddToCart } = cartSlice.actions
export default cartSlice.reducer