import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IScreenWidth } from '../types'

const initialState: IScreenWidth = {
  width: document.documentElement.clientWidth
}

const screenWidthSlice = createSlice({
  name: 'screenWidth',
  initialState,
  reducers: {
    changeScreenWidth(state, action: PayloadAction<number>) {
      state.width = action.payload
    }
  }
})

export const { changeScreenWidth } = screenWidthSlice.actions
export default screenWidthSlice.reducer