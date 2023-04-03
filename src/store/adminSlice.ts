import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isAdmin: false
}

const adminSlice = createSlice({
  name: 'admin',
  initialState,
  reducers: {
    actionLogIn(state) {
      state.isAdmin = true
    },
    actionLogOut(state) {
      state.isAdmin = false
    },
  }
})

export const { actionLogIn, actionLogOut } = adminSlice.actions
export default adminSlice.reducer