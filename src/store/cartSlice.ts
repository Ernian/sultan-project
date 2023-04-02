import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IProduct, IProductInCart } from '../types'

interface IAddToCartAction {
  product: IProduct
  count: number,
}

interface IInitialState {
  products: {
    [barcode: string]: IProductInCart,
  },
}

const initialState: IInitialState = {
  products: {},
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    actionAddProductToCart(state, { payload: { product, count } }
      : PayloadAction<IAddToCartAction>) {
      if (state.products[product.barcode]) {
        state.products[product.barcode].count += count
      } else {
        state.products[product.barcode] = { ...product, count }
      }
    },
    actionDeleteProductFromCart(state, { payload }: PayloadAction<string>) {
      if (state.products[payload]) {
        delete state.products[payload]
      }
    },
    actionIncProductCount(state, { payload }: PayloadAction<string>) {
      if (state.products[payload]) {
        state.products[payload].count += 1
      }
    },
    actionDecProductCount(state, { payload }: PayloadAction<string>) {
      if (!state.products[payload]) return

      if (state.products[payload].count === 1) {
        delete state.products[payload]
      } else {
        state.products[payload].count -= 1
      }
    },
    actionClearCart(state) {
      state.products = {}
    }
  }
})

export const {
  actionAddProductToCart,
  actionDeleteProductFromCart,
  actionIncProductCount,
  actionDecProductCount,
  actionClearCart,
} = cartSlice.actions
export default cartSlice.reducer