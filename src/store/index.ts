import { configureStore } from '@reduxjs/toolkit'
import screenWidthReducer from './screenWidthSlice'
// import cartReducer from './cartSlice'
// import searchFilterReducer from './searchFilterSlice'

const store = configureStore({
  reducer: {
    screenWidth: screenWidthReducer,
    // cart: cartReducer,
    // searchFilter: searchFilterReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store