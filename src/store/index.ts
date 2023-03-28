import { configureStore } from '@reduxjs/toolkit'
import screenWidthReducer from './screenWidthSlice'
import filterReducer from './filterSlice'
// import cartReducer from './cartSlice'

const store = configureStore({
  reducer: {
    screenWidth: screenWidthReducer,
    filters: filterReducer
    // cart: cartReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store